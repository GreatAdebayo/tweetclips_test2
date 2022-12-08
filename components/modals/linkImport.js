// import dp from '../../assets/dp.png'

import { useContext,  useState } from "react"
import ArtBoardContext from "../../context/artboard/context";
import UiContext from "../../context/UI/context";




const LinkImport = (props) => {


    let { showItem, setAlert, alert } = useContext(UiContext);
    let { getTweet } = useContext(ArtBoardContext);

    const [link, setLink] = useState("")


    const submit = () => {
        setAlert({ msg: null, type: "loading" });
        let data = { tweetLink: link }
        getTweet(data)
    }


    return (
        <>

            <div className="absolute top-0 left-0" >
                <div className="inset-0 fixed bg-slate-800 w-screen z-50 h-[100vh] bg-opacity-70 flex items-center px-3">

                    <div data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-out" className="rounded-lg space-y-4 bg-white dark:bg-slate-700 mx-auto w-full lg:w-2/3 2xl:w-1/2 py-3">
                        <div className="flex justify-between items-center  2xl:px-8  border-b dark:border-slate-600 py-4  px-4 md:px-6">
                            <div>
                                <h2 className="text-sm 2xl:text-xl font-bold dark:text-slate-400">Import Tweet Link</h2>
                            </div>

                            <div>
                                <button onClick={() => showItem('import')} className="text-lg 2xl:text-2xl dark:text-slate-300"><i class="lni lni-close"></i></button>
                            </div>
                        </div>

                        <div className='2xl:px-8  py-7  px-4 md:px-6 space-y-4'>
                            <div className="flex gap-4 items-start">
                                <div className='flex-1'>
                                    <div className="flex justify-center flex-1 ">
                                        <input value={link} onChange={(e) => setLink(e.target.value)} className="w-full pl-8 py-6 text-sm text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-500 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Paste tweet link..." />
                                    </div>
                                </div>
                            </div>

                            <div className='py-4 flex items-center justify-end'>
                                <div className=''>
                                    <button disabled={alert.type === "loading"} onClick={submit} className=" w-full bg-blue-500 py-4 px-6 rounded-lg text-white shadow-lg dark:shadow-slate-700 shadow-blue-500 hover:bg-blue-700 transition-all duration-500" type='submit'>

                                        {alert.type === "loading" ? (
                                            <div className="flex gap-1.5 items-center justify-center">
                                                Loading...
                                                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="flex gap-3 items-center">
                                                <i class="lni lni-download"></i>
                                                <span className="font-semibold">Import Links</span>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default LinkImport;