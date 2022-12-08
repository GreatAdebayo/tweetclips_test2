import { useContext } from "react"
import ArtBoardContext from "../../../context/artboard/context"



const FontSize = () => {

    let {changeFontSize, font_size} = useContext(ArtBoardContext)

    const handleChange = (e) => {
        let current = e.target.value
        changeFontSize(current)
    }

    return (

        <>
            <div className="px-4 py-5">
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Font Size</label>
                <input id="default-range" type="range" onChange={handleChange} value={font_size} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>

        </>
    )
};


export default FontSize;