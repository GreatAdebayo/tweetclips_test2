
import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT, SWITCH_THEME, SHOW_ITEM, REMOVE_ITEM, SHOW_NAVTABS } from "./actions";
import UiContext from "./context";
import UiReducers from "./reducer";




const UiState = (props) => {

    const initialState = {
        isDark: 'light',
        alert: { showAlert: false, msg: null, type: null },
        show: null,
        navTabs: "overview"
    }

    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(UiReducers, initialState);

    //Global functions go down here (with Auth API calls)
    const setAlert = (data) => {
        dispatch({
            type: SET_ALERT,
            payload: data
        })
        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
        }), 7000)
    }


    const switchTheme = (value) => {
        dispatch({
            type: SWITCH_THEME,
            payload: value
        })
    }


    const showItem = (value) => {
        if (state.show === value) {
            dispatch({
                type: REMOVE_ITEM,
            })
        } else {
            dispatch({
                type: SHOW_ITEM,
                payload: value
            })
        }
    }


    const showNavTabs = (value) => {
        dispatch({
            type: SHOW_NAVTABS,
            payload: value
        })
    }















    return (
        <UiContext.Provider value={{
            setAlert,
            switchTheme,
            showItem,
            showNavTabs,
            navTabs: state.navTabs,
            show: state.show,
            alert: state.alert,
            isDark: state.isDark
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </UiContext.Provider>
    )


}


export default UiState;