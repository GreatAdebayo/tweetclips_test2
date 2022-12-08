import { useContext } from 'react';
import ColorPicker from 'react-best-gradient-color-picker'
import ArtBoardContext from '../../../context/artboard/context';






const BackgroundColor = () => {


    let {changeBgColor, bgColor} = useContext(ArtBoardContext)

    const passColor = (value) => {
        changeBgColor(value)
    }


    return (

        <>
            <div className='py-8'>
                <ColorPicker value={bgColor} onChange={passColor} className="space-y-5"  />
            </div>
        </>
    )
};


export default BackgroundColor;