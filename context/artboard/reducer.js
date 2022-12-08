import {
    //import all the actions for ui context api
    CHANGE_COLOR,
    GET_FONTS,
    FONT_SIZE,
    GET_SINGLE_ARTBOARD,
    GET_ALL_ARTBOARDS,
    NEW_TWEET,
    CHANGE_BG_COLOR,
    NO_ARTBOARD_FOUND,
    CHANGE_BG_URL,

} from './actions'




//create the Auth reducer

const ArtboardReducers = (state, action) => {

    switch (action.type) {

        case CHANGE_COLOR:
            return {
                ...state,
                artboardProps: { ...state.artboardProps, fontColor: action.payload }
            }
        case CHANGE_BG_COLOR:
            return {
                ...state,
                artboardProps: { ...state.artboardProps, bgColor: action.payload }
            }

        case CHANGE_BG_URL:
            return {
                ...state,
                artboardProps: { ...state.artboardProps, bgUrl: action.payload }
            }

        case GET_FONTS:
            return {
                ...state,
                artboardProps: { ...state.artboardProps, fontStyle: action.payload }
            }

        case FONT_SIZE:
            return {
                ...state,
                artboardProps: { ...state.artboardProps, fontSize: action.payload }
            }

        case GET_ALL_ARTBOARDS:
            return {
                ...state,
                allProjects: action.payload,
                allArtboardLoading: true,
                projectId: null,
            }

        case NO_ARTBOARD_FOUND:
            return {
                ...state,
                allArtboardLoading: true,
                projectId: null
            }

        case NEW_TWEET:
            let res = action.payload
            return {
                ...state,
                allProjects: { ...state.Projects, res },
                singleArtboard: action.payload,
                artboardLoading: true,
                artboardProps: res.props,
                allArtboardLoading: false,
                projectId: res.id
            }

        case GET_SINGLE_ARTBOARD:
            return {
                ...state,
                singleArtboard: action.payload,
                artboardProps: action.payload.props,
                artboardLoading: true,
                allArtboardLoading: false,
                projectId: action.payload.id
            }





        default:
            return state;

    }


}



export default ArtboardReducers;