import { useContext } from 'react';
import ColorPicker from 'react-best-gradient-color-picker'
import ArtBoardContext from '../../../context/artboard/context';






const Color = () => {


    let {changeColor, color} = useContext(ArtBoardContext)

    const passColor = (value) => {
        changeColor(value)
    }


    return (

        <>
            <div className='py-8'>
                <ColorPicker value={color} onChange={passColor} className="space-y-5"  />
            </div>
        </>
    )
};


export default Color;