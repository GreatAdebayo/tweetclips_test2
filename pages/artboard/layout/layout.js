import { useContext, useState } from "react"
import { layout } from "../../../assets/layoutImage"
import ArtBoardContext from "../../../context/artboard/context"







const Layout = (props) => {


    const [imageUrl, setImageUrl] = useState("")

    let {changeBgUrl} = useContext(ArtBoardContext)


    return (

        <>
            <div className="">
                <div className="flex my-4 items-center flex-1 ">
                    <div data-aos="fade-in" className="w-full  focus-within:text-sky-500">
                        <input onChange={(e) => setImageUrl(e.target.value)} className="w-full pl-10 pr-2 py-2 h-14 font-semibold text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-slate-700 dark:text-slate-300 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Import ur image url" />
                        <button disabled={alert.type === "loading"}
                            className="block w-full px-4 py-3 shadow-lg shadow-blue-200 mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type='submit'
                        >
                            {alert.type === "loading" ? (
                                <div className="flex gap-1.5 items-center justify-center">
                                    Loading...
                                    <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                </div>
                            ) : (
                                <p>Add Image</p>
                            )}
                        </button>

                    </div>
                </div>


                <section className="grid grid-cols-2 gap-6">
                    {
                        layout.map((each) => {
                            return (
                                <div key={each.id} className="rounded-lg cursor-pointer" onClick={() => changeBgUrl(each.url)} >
                                    <img data-aos="fade-in" src={each.url} alt="bg-layout" className="w-full rounded-lg" />
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
};


export default Layout;