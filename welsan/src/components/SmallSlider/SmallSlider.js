
// import BtnSlider from "../Slider/BtnSlider";
// import dataSlider from "../Slider/dataSlider";
// import './smallslider.css';
// import { useEffect, useState, useRef } from 'react';


// export default function SmallSlider() {

//     const timerRef = useRef(null);

//     const [slideIndex, setSlideIndex] = useState(1);

//     const nextSlide = () => {
//         if (slideIndex !== dataSlider.length) {
//             setSlideIndex(slideIndex + 1)
//         }
//         else if (slideIndex === dataSlider.length) {
//             setSlideIndex(1)
//         }

//     }

//     const prevSlide = () => {
//         if (slideIndex !== 1) {
//             setSlideIndex(slideIndex - 1);
//         }
//         else if (slideIndex === 1) {
//             setSlideIndex(dataSlider.length)
//         }

//     }

//     useEffect(() => {
//         if (timerRef.current) {
//             clearTimeout(timerRef.current);
//         }
//         timerRef.current = setTimeout(() => {
//             nextSlide();
//         }, 4000);

//         return () => clearTimeout(timerRef.current);
//     }, [nextSlide]);

//     return (
//         <>
//             <div className="small-container">
//                 <div className="container-slider-small">
//                     {dataSlider.map((obj, index) => {
//                         return (
//                             <div
//                                 key={obj.id}
//                                 className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
//                                 <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.webp`}></img>
//                             </div>
//                         )
//                     })
//                     }
//                     <BtnSlider moveSlide={nextSlide} direction={"next"} />
//                     <BtnSlider moveSlide={prevSlide} direction={"prev"} />
//                 </div>
//             </div>
//        </>
//     )
// }
