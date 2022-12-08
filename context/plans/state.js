
import axios from "axios";
import { useReducer } from "react";
import { useRouter } from 'next/router'
import { baseUrl } from "../../baseUrl";
import { GET_PLANS} from "./actions";
import PlanContext from "./context";
import planReducers from "./reducer";





const PlanState = (props) => {

    const initialState = {
        loadingPlan: false,
        allPlans: null,
        features: null,
    }

    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(planReducers, initialState);

    const router = useRouter()

    //Global functions go down here (with Auth API calls)
    const getPlans = async () => {
        await axios.get(`${baseUrl}/plans`)
            .then((response) => {
                const { plans } = response.data;
                dispatch({
                    type: GET_PLANS,
                    payload: plans
                })
            }).catch((err) => {
                console.log(err)
            })
    }


    const userSubscribe = async (priceId) => {
        await axios.post(`${baseUrl}/transaction/${priceId}`)
            .then((response) => {
                const {data} = response
                window.open(`${data.checkout_url}`,'_blank')
            }).catch((err) => {
                console.log(err)
            })
    }





    return (
        <PlanContext.Provider value={{
            loadingPlan: state.loadingPlan,
            allPlans: state.allPlans,
            features: state.features,
            getPlans,
            userSubscribe,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </PlanContext.Provider>
    )


}


export default PlanState;