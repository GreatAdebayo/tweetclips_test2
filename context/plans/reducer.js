import {
    //import all the actions for plan context api
    GET_PLANS,

} from './actions'




//create the Auth reducer

const planReducers = (state, action) => {

    switch (action.type) {

        case GET_PLANS:
            return {
                ...state,
                allPlans: action.payload,
                loadingPlan:true
            }






        default:
            return state;

    }


}



export default planReducers;