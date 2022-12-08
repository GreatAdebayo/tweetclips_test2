import axios from "axios";
import { useContext, useReducer } from "react";
import UiContext from "../UI/context";
import ArtBoardContext from "./context";
import ArtboardReducers from "./reducer";

import {
  CHANGE_COLOR,
  GET_FONTS,
  FONT_SIZE,
  GET_ALL_ARTBOARDS,
  NEW_TWEET,
  GET_SINGLE_ARTBOARD,
  CHANGE_BG_COLOR,
  CHANGE_BG_URL,
  NO_ARTBOARD_FOUND,
} from "./actions";
import { useRouter } from "next/router";
import { baseUrl } from "../../baseUrl";

const ArtboardState = (props) => {
  const initialState = {
    allProjects: null,
    singleArtboard: null,
    artboardLoading: false,
    allArtboardLoading: false,
    artboardProps: null,
    projectId: null,
  };

  //to call Uireducers with dispatch
  const [state, dispatch] = useReducer(ArtboardReducers, initialState);

  const router = useRouter();

  let { setAlert, showItem } = useContext(UiContext);

  //Global functions go down here (with Auth API calls)
  const changeColor = (value) => {
    dispatch({
      type: CHANGE_COLOR,
      payload: value,
    });
  };

  const changeBgColor = (value) => {
    dispatch({
      type: CHANGE_BG_COLOR,
      payload: value,
    });
  };

  const changeBgUrl = (value) => {
    dispatch({
      type: CHANGE_BG_URL,
      payload: value,
    });
  };

  const getFonts = async (value) => {
    dispatch({
      type: GET_FONTS,
      payload: value,
    });
  };

  const changeFontSize = (value) => {
    dispatch({
      type: FONT_SIZE,
      payload: value,
    });
  };

  const getAllProjects = async () => {
    await axios
      .get(`${baseUrl}/artboard`)
      .then((response) => {
        const { data } = response;
        dispatch({
          type: GET_ALL_ARTBOARDS,
          payload: data.artboards,
        });
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          if (data.isSuccess === false) {
            dispatch({
              type: NO_ARTBOARD_FOUND,
            });
          }
        }
      });
  };

  const getTweet = async (value) => {
    await axios
      .post(`${baseUrl}/get_tweet`, value)
      .then((response) => {
        const { data } = response;
        router.push(`/artboard/${data.artBoard.id}`);
        dispatch({
          type: NEW_TWEET,
          payload: data.artBoard,
        });
        showItem("import");
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          if (data.isSuccess === false) {
            setAlert({ msg: data.message, type: "fail" });
          }
        }
      });
  };

  const getSingleArtboard = async (id) => {
    await axios
      .get(`${baseUrl}/artboard/${id}`)
      .then((response) => {
        const { data } = response;
        dispatch({
          type: GET_SINGLE_ARTBOARD,
          payload: data.artBoard,
        });
      })
      .catch((err) => {
        setAlert({ msg: err.message, type: "fail" });
        if (err.response) {
          const { data } = err.response;
          if (data.isSuccess === false) {
            setAlert({ msg: data.message, type: "fail" });
            router.push("/dashboard");
          }
        }
      });
  };

  const updateArtboardProps = async (id) => {
    try {
      await axios.put(`http://localhost:3001/api/v1/artboard/${id}`);
    } catch (error) {
        console.log(error.response)
    }
  };

  return (
    <ArtBoardContext.Provider
      value={{
        color: state.color,
        font: state.font,
        font_size: state.font_size,
        allProjects: state.allProjects,
        singleArtboard: state.singleArtboard,
        artboardLoading: state.artboardLoading,
        artboardProps: state.artboardProps,
        allArtboardLoading: state.allArtboardLoading,
        projectId: state.projectId,
        changeColor,
        changeBgColor,
        getFonts,
        changeFontSize,
        getAllProjects,
        getTweet,
        getSingleArtboard,
        changeBgUrl,
        updateArtboardProps,
      }}
    >
      {/* to make the fuctions and state availabe globally */}
      {props.children}
    </ArtBoardContext.Provider>
  );
};

export default ArtboardState;
