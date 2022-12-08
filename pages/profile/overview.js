import Head from "next/head"
import { useContext } from "react"
import AuthContext from "../../context/auth/context"



export const Overview = () => {

    let {user} = useContext(AuthContext)



    return (
        <>

        <Head>
            <title>Profile</title>
        </Head>

            <section className=" dark:bg-slate-900 space-y-6">
                <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-6">
                    <h2 className="font-bold text-xl text-slate-500 dark:text-slate-300">Profile Details</h2>
                </div>

                <div className="md:w-2/5 lg:w-4/5 xl:w-2/5 space-y-7 md:space-y-10">
                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Full Name</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">{user.displayName}</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Plan Subscription</div>
                        <div className="font-semibold  dark:text-slate-300  text-slate-600">Free</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Subscription Date</div>
                        <div className="font-semibold  dark:text-slate-300  text-slate-600">12 - 12 - 2022</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Expiry Date</div>
                        <div className="font-semibold  dark:text-slate-300  text-slate-600">12 - 12 - 2023</div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="font-medium dark:text-slate-600 text-slate-400 text-sm md:text-base">Email Address</div>
                        <div className="font-semibold dark:text-slate-300 text-slate-600">{user.email}</div>
                    </div>

                </div>


            </section>

        </>
    )
}