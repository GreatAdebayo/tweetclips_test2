import Head from "next/head"



export const Devices = () => {
    return (
        <>
            <Head>
                <title>Active Devices</title>
            </Head>

            <section className=" dark:bg-slate-900 space-y-6">
                <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-6">
                    <h2 className="font-bold text-xl text-slate-500 dark:text-slate-300">Your Devices</h2>
                </div>

                <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 gap-6 space-y-4 md:space-y-0">

                    <div className="border  dark:border-slate-500 rounded-lg py-4 text-slate-800 dark:text-slate-400 px-4 md:px-6 2xl:px-8">
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-solid fa-desktop text-2xl"></i>
                            </div>
                            <div>
                                <h2 className="font-bold">Window PC </h2>
                                <p className="font-medium text-sm ">Chrome - <span className="text-green-400 ml-4">Active Now</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="border  dark:border-slate-500 rounded-lg py-4 text-slate-800 dark:text-slate-400 px-4 md:px-6 2xl:px-8">
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-solid fa-laptop text-2xl"></i>
                            </div>
                            <div>
                                <h2 className="font-bold">Window Laptop </h2>
                                <p className="font-medium text-sm ">Chrome - <span className="text-slate-400  ml-3">2days ago</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="border  dark:border-slate-500 rounded-lg py-4 text-slate-800 dark:text-slate-400 px-4 md:px-6 2xl:px-8">
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-solid fa-mobile-screen-button text-2xl"></i>
                            </div>
                            <div>
                                <h2 className="font-bold">Iphone 6s</h2>
                                <p className="font-medium text-sm ">Oohs app - <span className="text-slate-400  ml-4">20 minutes ago</span></p>
                            </div>
                        </div>
                    </div>


                    <div className="border  dark:border-slate-500 rounded-lg py-4 text-slate-800 dark:text-slate-400 px-4 md:px-6 2xl:px-8">
                        <div className="flex gap-4 items-center">
                            <div>
                                <i class="fa-solid fa-desktop text-2xl"></i>
                            </div>
                            <div>
                                <h2 className="font-bold">Window PC</h2>
                                <p className="font-medium text-sm ">Oohs app - <span className="text-slate-400  ml-3">2 minutes ago </span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}