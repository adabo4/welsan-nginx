import './slider.css';
import rightArrow from './right5.svg';
import leftArrow from './left5.svg';


function BtnSlider({ direction, moveSlide }) {


    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>

            <img src={direction === "next" ? rightArrow : leftArrow} alt='arrow'></img>

        </button>
    )
}

export default BtnSlider