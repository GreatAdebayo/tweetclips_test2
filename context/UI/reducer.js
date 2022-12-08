import {
    //import all the actions for ui context api
    SET_ALERT,
    SWITCH_THEME,
    SHOW_ITEM,
    REMOVE_ITEM,
    SHOW_NAVTABS,
    REMOVE_ALERT,
} from './actions'




//create the Auth reducer

const UiReducers = (state, action) => {

    switch (action.type) {

        case SET_ALERT:
            let res = action.payload
            return {
                ...state,
                alert: { ...alert, showAlert: true, msg: res.msg, type: res.type },
            }

        case REMOVE_ALERT:
            return {
                ...state,
                alert: { ...alert, showAlert: false, msg: null, type: null },
            }

        case SWITCH_THEME:
            return {
                ...state,
                isDark: action.payload,
                show: null
            }

        case SHOW_ITEM:
            return {
                ...state,
                show: action.payload
            }

        case REMOVE_ITEM:
            return {
                ...state,
                show: null
            }

        case SHOW_NAVTABS:
            return {
                ...state,
                navTabs: action.payload
            }





















        default:
            return state;

    }


}



export default UiReducers;