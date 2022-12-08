import { ErrorMessage, Field, Form, Formik } from "formik"
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import * as Yup from 'yup';
import AuthLayout from "../components/layouts/authLayout";
import AuthContext from "../context/auth/context";
import UiContext from "../context/UI/context";





const ForgotPassword = () => {

    let { setAlert, alert } = useContext(UiContext);
    let { ResetPassword } = useContext(AuthContext)

    //creating  intialvalues for formik
    const intialValues = {
        email: "",
    }

    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    })


    const onSubmit = (data, { resetForm }) => {
        setAlert({ msg: null, type: "loading" });
        setTimeout(() => {
            ResetPassword(data)
        }, 2000)
    }


    return (
        <>

            <Head>
                <title>Forgot Password</title>
            </Head>


            <AuthLayout>
                <div>
                    <h2 className="text-center font-bold text-2xl">Forgot Password ?</h2>
                    <p className="text-slate-400 font-medium text-center">Enter your email to reset your password.</p>
                </div>

                <div>
                    <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>

                            <div className='my-4 md:mt-0 lg:py-1.5'>
                                <label className="block text-sm">
                                    <span className="text-gray-700">Email Address</span>
                                    <Field
                                        type="email"
                                        name="email"
                                        className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                    />
                                    <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                </label>
                            </div>

                            <div className="gap-4 lg:flex justify-center">
                                <button disabled={alert.type === "loading"}
                                    className="block w-full px-4 py-3 shadow-lg shadow-blue-200 mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type='submit'
                                >                            {alert.type === "loading" ? (
                                    <div className="flex gap-1.5 items-center justify-center">
                                        Loading...
                                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                ) : (
                                    <p>Submit</p>
                                )}</button>

                                <Link href="/"
                                    className="block lg:flex lg:w-auto w-full  px-8 py-3 shadow mt-6 text-sm font-semibold text-center transition-colors duration-150 bg-slate-200 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-blue"
                                >Cancel</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </AuthLayout>

        </>
    )
};


export default ForgotPassword;