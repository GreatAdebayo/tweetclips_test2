import {
    //import all the actions for user context api

    SIGN_UP,
    RESET_PASSWORD,
    SIGNIN_SUCCESS,
    USER_LOADED_SUCCESS,
    SIGN_OUT,
    USER_LOADED_FAIL,
    EMAIL_VERIFY_SUCCESS,
    BROWSER_CONFIG_SUCCESS,
    PASSWORD_RESET_SUCCESS,
    EDIT_PROFILE,
    // EDIT_USER

} from './actions'




//create the Auth reducer

const AuthReducers = (state, action) => {

    switch (action.type) {

        case SIGN_UP:
            return {
                ...state,
                user: { email: action.payload.email }
            }

        case RESET_PASSWORD:
            return {
                ...state,
                user: { email: action.payload }
            }

        case SIGNIN_SUCCESS:
        case EMAIL_VERIFY_SUCCESS:
        case BROWSER_CONFIG_SUCCESS:
        case PASSWORD_RESET_SUCCESS:
            localStorage.setItem('ctoken', action.payload)
            return {
                ...state,
                token: action.payload,
            }

        case USER_LOADED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.user,
            }

        case SIGN_OUT:
        case USER_LOADED_FAIL:
            localStorage.removeItem('ctoken')
            return {
                ...state,
                user: null,
                isLoading: false,
                isAuthenticated: false
            }
        
        case EDIT_PROFILE:
            return{
                ...state,
                user: {displayName:action.payload},
            }



        default:
            return state;
    }


}



export default AuthReducers;