import { useContext, useState } from "react"
import { fonts } from "../../../assets/fonts"
import ArtBoardContext from "../../../context/artboard/context"







const Text = () => {


    let { getFonts, font } = useContext(ArtBoardContext)

    const [search, setSearch] = useState("")


    return (

        <>
            <div className="">
                <div className="flex my-4 items-center flex-1 ">
                    <div className="relative lg:w-full  focus-within:text-sky-500">
                        <div className="absolute inset-y-0 flex items-center pl-3">
                            <svg className="w-4 h-4 dark:text-slate-300" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-2 py-2 h-14 font-semibold text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-xl dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-slate-700 dark:text-slate-300 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for projects" aria-label="Search" />
                    </div>
                </div>


                {
                    fonts.filter((each) => {
                        if (search === "") {
                            return each
                        } else if (each.name.toLowerCase().includes(search.toLowerCase())) {
                            return each
                        }
                        return false;
                    }).map((each) => {
                        return (
                            <div key={each.name} onClick={() => getFonts(each.name)} className={`my-2 cursor-pointer px-6 border-2 dark:border-slate-600  flex justify-between  dark:text-slate-300 text-center py-5 w-full rounded-lg font-extrabold text-2xl ${font === each.name ? "bg-blue-300 border-none translate-x-2 transition-all duration-300 text-white":""}`} style={{ fontFamily: ` ${each.name}` }}>
                                {each.name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};


export default Text;