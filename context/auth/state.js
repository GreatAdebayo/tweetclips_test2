import axios from "axios";
import { useRouter } from "next/router";
import { baseUrl } from "../../baseUrl";
import UiContext from "../UI/context";
import setAuthToken from "./setAuthToken";
import { useContext, useReducer, useState } from "react";
import AuthReducers from "./reducer";

import {
  SIGN_UP,
  RESET_PASSWORD,
  SIGNIN_SUCCESS,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  SIGN_OUT,
  EMAIL_VERIFY_SUCCESS,
  BROWSER_CONFIG_SUCCESS,
  PASSWORD_RESET_SUCCESS,
} from "./actions";
import AuthContext from "./context";

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    token:
      typeof window !== "undefined"
        ? window.localStorage.getItem("ctoken")
        : false,
  };

  const [loading, setLoading] = useState(false);

  //to call authreducer with dispatch
  const [state, dispatch] = useReducer(AuthReducers, initialState);

  //alert context
  let { setAlert, showItem } = useContext(UiContext);

  const router = useRouter();

  //api config
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Global functions go down here (with Auth API calls)
  const userSignup = async (value) => {
    await axios
      .post(`${baseUrl}/signup`, value, config)
      .then((response) => {
        const { data } = response;
        setAlert({ msg: data.message, type: "success" });
        dispatch({
          type: SIGN_UP,
          payload: value,
        });
        router.push("verification");
        return true;
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
        }
      });
  };

  const userLogin = async (value) => {
    await axios
      .post(`${baseUrl}/auth`, value, config)
      .then(async (response) => {
        const { data } = response;
        localStorage.setItem("ctoken", data.token);
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: data.token,
        });
        let userLoading = await loadUsersDetails();
        if (userLoading) {
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
          if (data.device) {
            router.push(`/newdevice/${data.device}/${value.email} `);
          }
        }
      });
  };

  const verifyEmail = async (code) => {
    const value = { code: code, email: state.user.email };
    await axios
      .post(`${baseUrl} /confirmation`, value, config)
      .then(async (response) => {
        const { data } = response;
        localStorage.setItem("ctoken", data.token);
        dispatch({
          type: EMAIL_VERIFY_SUCCESS,
        });
        let userLoading = await loadUsersDetails();
        if (userLoading) {
          router.push("/dashboard");
          setAlert({ msg: data.message, type: "success" });
        }
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
        }
      });
  };

  const ResetPassword = async ({ email }) => {
    await axios
      .get(`${baseUrl}/password_reset/${email}`, config)
      .then((response) => {
        const { data } = response;
        setAlert({ msg: data.message, type: "success" });
        dispatch({
          type: RESET_PASSWORD,
          payload: email,
        });
        router.push("/updatePassword");
        return true;
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
        }
      });
  };

  const updatePassword = async (data) => {
    let details = { code: data.code, password: data.password };
    await axios
      .put(`${baseUrl}/password_reset/${state.user.email}`, details, config)
      .then(async (response) => {
        const { data } = response;
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          payload: data.token,
        });
        let userLoading = await loadUsersDetails();
        if (userLoading) {
          router.push("/dashboard");
          setAlert({ msg: data.message, type: "success" });
        }
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
        }
      });
  };

  const newBrowserConfig = async (data) => {
    let details = { email: data.email, code: data.code };
    await axios
      .put(`${baseUrl}/browser_confirmation/${data.id}`, details, config)
      .then(async (response) => {
        const { data } = response;
        localStorage.setItem("ctoken", data.token);
        dispatch({
          type: BROWSER_CONFIG_SUCCESS,
        });
        setAlert({ msg: data.message, type: "success" });
        let userLoading = await loadUsersDetails();
        if (userLoading) {
          router.push("/dashboard");
        }
        return true;
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
        }
      });
  };

  const loadUsersDetails = async () => {
    if (localStorage.ctoken) {
      setAuthToken(localStorage.ctoken);
    }
    let res = await axios
      .get(`${baseUrl}/auth/me`)
      .then((response) => {
        const { data } = response;
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: data,
        });
        setLoading(true);
        return true;
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        router.push("/");
        if (err.response) {
          dispatch({
            type: USER_LOADED_FAIL,
          });
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
          router.push("/");
          return false;
        }
      });
    return res;
  };

  const userSignOut = () => {
    dispatch({
      type: SIGN_OUT,
    });
    router.push("/");
    showItem("profile");
  };

  const resendCode = async (value) => {
    await axios
      .post(
        `${baseUrl}/resend_code/${value.email}`,
        { type: value.type },
        config
      )
      .then((response) => {
        const { data } = response;
        setAlert({ msg: data.message, type: "success" });
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
        }
      });
  };

  const otherAuth = async () => {
    let userLoading = await loadUsersDetails();
    if (userLoading) {
      router.push("/dashboard");
      setAlert({ msg: "Signin Successful", type: "success" });
    } else {
      router.push("/");
      setAlert({ msg: "Unauthorised", type: "fail" });
    }
  };

  const editProfile = async (data) => {
    if (localStorage.ctoken) {
      setAuthToken(localStorage.ctoken);
    }
    await axios
      .put(`${baseUrl}/auth`, data, config)
      .then((response) => {
        const { data } = response;
        setAlert({ msg: data.message, type: "success" });
        setLoading(true);
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          setAlert({ msg: data.message, type: "fail" });
          if (data.device) {
            const newBrowser = {
              email: value.email,
              id: data.device,
            };
            router.push(`/newdevice/${newBrowser} `);
          }
        }
      });
  };



  return (
    <AuthContext.Provider
      value={{
        userSignup,
        userLogin,
        verifyEmail,
        ResetPassword,
        updatePassword,
        newBrowserConfig,
        loadUsersDetails,
        userSignOut,
        resendCode,
        otherAuth,
        editProfile,
        setLoading,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        loading: loading,
        user: state.user,
        token: state.token,
      }}
    >
      {/* to make the fuctions and state availabe globally */}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
