
import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react"
import phone from '../assets/media/smartphone-2.svg'
import AuthLayout from "../components/layouts/authLayout";
import AuthContext from "../context/auth/context";
import UiContext from "../context/UI/context";






const Verification = () => {

    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpToken, setOtpToken] = useState("");

    let { verifyEmail } = useContext(AuthContext)
    let { setAlert, alert } = useContext(UiContext);
    let { user, resendCode, loadUsersDetails } = useContext(AuthContext)


    const details = {
        email: user.email,
        type: 1
    }

    const handleChange = (e, index) => {
        setOtp([...otp.map((d, idx) => (idx === index ? e.value : d))]);
        if (e.nextSibling) {
            e.nextSibling.focus();
        }
        setOtpToken(+otp.join("") + e.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert({ msg: null, type: "loading" });
        setTimeout(() => {
            verifyEmail(parseInt(otpToken))
            loadUsersDetails();
        }, 2000)

    }


    return (
        <>

            <Head>
                <title>Verification</title>
            </Head>


            <AuthLayout>
                <div>
                    <Image src={phone} alt="img" className="w-24 mx-auto" />
                </div>

                <div className='space-y-2'>
                    <h2 className='text-xl font-extrabold text-center'> Verify your Email</h2>
                    <p className='font-medium text-center text-slate-400'>Enter the verification code we sent to</p>
                    <p className='font-bold text-center '>{user.email}</p>
                </div>

                <div className='space-y-6 flex justify-center'>

                    <form onSubmit={handleSubmit}>

                        {
                            otp.map((x, index) => (
                                <input
                                    type="number"
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                    key={index}
                                    value={x}
                                    name="token"
                                    maxLength={1}
                                    className="w-10 h-10 md:w-14 md:h-14 mx-3 border-2 rounded-md text-xl md:text-2xl font-medium text-center"
                                />
                            ))
                        }


                        <button disabled={alert.type === "loading"}
                            className="block w-full px-4 py-3 shadow-lg shadow-blue-200 mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type='submit'
                        > {alert.type === "loading" ? (
                            <div className="flex gap-1.5 items-center justify-center">
                                Loading...
                                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                            </div>
                        ) : (
                            <p>Verify</p>
                        )}</button>

                    </form>

                </div>
                <p className='font-medium text-center text-xs md:text-sm'>Didn’t get the code? <button onClick={() => resendCode(details)} className='text-sky-600'>Resend</button> </p>
            </AuthLayout>

        </>
    )
};

export default Verification;