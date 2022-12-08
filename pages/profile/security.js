import { ErrorMessage, Field, Form, Formik } from 'formik'
import Head from 'next/head'


export const Security = () => {


    return (
        <>

            <Head>
                <title>Security</title>
            </Head>

            <section className=" dark:bg-slate-900 space-y-8">
                <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-7">
                    <h2 className="font-bold text-xl text-slate-500 dark:text-slate-300">Change Password</h2>
                </div>
                <div className='py-5'>
                    <Formik>
                        <Form>
                            <div className=' mb-4 lg:mb-0 space-y-4 md:space-y-4 lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="text-slate-500">Current Password</span>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                            placeholder=""
                                        />
                                        <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="text-slate-500">New Password</span>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                            placeholder=""
                                        />
                                        <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                            </div>

                            <div className='mb-4  space-y-4 md:space-y-4 lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="text-slate-500">Re-type New Password</span>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                            placeholder=""
                                        />
                                        <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                    <p className='text-right font-medium text-blue-700'>Forgot Password?</p>
                                </div>
                            </div>

                            <button className='bg-blue-600 w-full md:w-1/2 text-center py-3 text-white rounded-xl'>Save</button>
                        </Form>
                    </Formik>
                </div>
            </section>

        </>
    )
}