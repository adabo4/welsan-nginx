import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import './slider.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import MediaQuery from "../MediaQueryLines/MediaQuery";
import MediaQueryLines2 from "../MediaQueryLines/MediaQueryLines2";

function Slider() {
    const timerRef = useRef(null);

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = useCallback(() => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }, [slideIndex]);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            nextSlide();
        }, 4000);

        return () => clearTimeout(timerRef.current);
    }, [nextSlide]);

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }

    }

    return (
        <>
            <div className="big-container">
                <MediaQuery />
                <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.webp`} alt="Slides"></img>
                            </div>

                        )
                    })
                    }
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                </div>

                {/* <Lines></Lines> tuto pojdu lines ked sa zmeni viewport a flexbox column */}
                <MediaQueryLines2></MediaQueryLines2>

                <div className="eng-bubble">

                    <div className="eng-bubble-text">
                        <hr className="first-line" />
                        <hr className="second-line" />
                        <h1>Angličtina v Trnave</h1>
                        <p>Nauč sa hovoriť a myslieť po anglicky!</p>
                        <hr className="bubble-dotted" />
                        <p>Pre úplných začiatočníkov i večných študentov</p>
                        <p>Deti, dospelí, firemné kurzy.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Slider;
