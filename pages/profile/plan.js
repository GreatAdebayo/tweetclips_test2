import { useContext, useState } from "react"
import PlanContext from "../../context/plans/context"
import { Loading } from 'notiflix'
import UiContext from "../../context/UI/context"
import Head from "next/head"


export const Plan = () => {

    const [details, setDetails] = useState('startup')
    const [planType, setPlanType] = useState('monthly')


    let { allPlans, loadingPlan, userSubscribe } = useContext(PlanContext)

    let { setAlert, alert } = useContext(UiContext)


    const handlePlanType = (value) => {
        setPlanType(value)
    }


    const handleChange = (value) => {
        setDetails(value)
    }


    const createTrans = (id) => {
        setAlert({ msg: null, type: "loading" })
        userSubscribe(id);
    }







    return (
        <>

            <Head>
                <title>Plan</title>
            </Head>



            {
                loadingPlan ?

                    <section className=" dark:bg-slate-900 ">
                        <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-3">
                            <div className="text-center space-y-3">
                                <h2 className="text-2xl text-slate-800 dark:text-slate-300 font-bold">Upgrade a Plan</h2>
                                <p className="text-slate-500">If you need more info, please check <span className="font-bold text-blue-600">Pricing Guidelines.</span></p>
                            </div>
                        </div>

                        <section className="space-y-7 my-3">

                            <section className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">

                                {
                                    allPlans.map((eachplan) => {
                                        return (
                                            <div className="shadow-xl dark:border-slate-600 rounded-xl p-6 space-y-5">
                                                <h2 className="bg-blue-500 text-white font-semibold text-center p-3 rounded-md">{eachplan.name.toUpperCase()}</h2>

                                                {
                                                    eachplan.plansToFeatures.map((eachfeature) => {
                                                        return (
                                                            <div className="rounded-lg border border-slate-300 dark:border-slate-600 p-5 space-y-4">
                                                                <p className="text-center border-b pb-4 font-medium">Features</p>
                                                                <div className="flex gap-3  ">
                                                                    <p><i class="lni lni-checkmark-circle"></i></p>
                                                                    <p>{eachfeature.feature.name}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                                <div className="grid grid-cols-2 gap-3 text-sm font-medium items-center justify-items-stretch text-center">
                                                    {
                                                        eachplan.prices.map((price) => {
                                                            return (

                                                                <div className="rounded-md items-center cursor-pointer bg-blue-500 text-white py-3 px-6" onClick={() => createTrans(price.id)}>
                                                                    {price.unit_amount} {price.currency} /<span>{price.recurring === 2 ? "Year" : price.recurring === 1 ? "Month" : ""}</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </section>
                    </section>

                    :

                    Loading.standard()
            }

        </>
    )
}