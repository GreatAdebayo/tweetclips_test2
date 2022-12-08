import { Formik, Form, Field, ErrorMessage } from "formik";   //to make use of formik to handle the form creation for the posts
import Head from "next/head";
import { useContext, useState } from "react";
import * as Yup from 'yup'
import AuthContext from "../../context/auth/context";






export const EditProfile = () => {

    let { user, isLoading, editProfile, setLoading } = useContext(AuthContext)

    const [onChange, setOnchange] = useState(false)


    const intialValues = {
        displayName: "",
        email: user.email,
    }

    const validationSchema = Yup.object().shape({
        displayName: Yup.string().required("Please input your displayName"),  //i.e it must be a string and its required
        email: Yup.string().email('Invalid email').required('Email is required'),
    })


    const setchange = () => {
        setOnchange(true)
    }


    const Edit = (data) => {
        editProfile({ displayName: data.displayName })
        setLoading(false)
    }



    return (
        <>

            <Head>
                <title>Edit Profile</title>
            </Head>


            <section className=" dark:bg-slate-900 space-y-6">
                <div className="border-b-2 border-slate-300 dark:border-slate-600 pb-6">
                    <h2 className="font-bold text-xl text-slate-500 dark:text-slate-300">Edit Profile</h2>
                </div>
                <Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={(data) => Edit(data)}>
                    <Form>

                        <div className="space-y-8">

                            <div>
                                <div className='w-36 mx-auto space-y-3 mb-3'>
                                    {
                                        !isLoading && user.displayPic !== null ? (
                                            <img src={`${user.displayPic.imageUrl}`} className="mx-auto rounded-full w-36" alt='img' />
                                        ) : (
                                            <div className='mx-auto rounded-full flex items-center justify-center w-36 h-36 bg-blue-500 text-white text-6xl font-medium'>{user.email.charAt(0).toUpperCase()}</div>
                                        )
                                    }

                                    <div className='flex space-x-4 justify-center text-blue-600 '>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-xs font-semibold text-center text-slate-700">Allowed file types: png, jpg, jpeg.</p>
                            </div>


                            <div className='space-y-6'>
                                <div className='mt-4 md:mt-0 flex-1 space-y-4'>
                                    <label className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Display Name</span>
                                        <Field
                                            name="displayName"
                                            onFocus={setchange}
                                            className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            type="text" />
                                        <ErrorMessage name="displayName" component="span" className="text-red-500" />
                                    </label>
                                </div>

                                <div className='flex-1 space-y-4'>
                                    <label className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Email Address</span>
                                        <Field
                                            name="email"
                                            disabled={true}
                                            className="block w-full mt-1 border p-2.5 font-medium text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            type="email" />
                                        <ErrorMessage name="email" component="span" className="text-red-500" />
                                    </label>
                                </div>
                            </div>

                            <button type='submit' className={` text-sm mt-5 text-white px-5 py-3 rounded-lg shadow-md shadow-blue-300 dark:shadow-gray-900 ${onChange ? "bg-blue-500" : "bg-blue-300"}`} >Save Changes</button>
                        </div>


                    </Form>
                </Formik>
            </section>

        </>
    )
}