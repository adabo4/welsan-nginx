import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import './slider.css';
import { useEffect, useState, useRef } from 'react';
import Lines from '../Lines/Lines';
import MediaQuery from "../MediaQueryLines/MediaQuery";
import Lines2 from "../Lines2/Lines2";
import MediaQueryLines2 from "../MediaQueryLines/MediaQueryLines2";



function Slider2() {
    const timerRef = useRef(null);

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () =>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }

    }

    const prevSlide = ()=>{
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if(slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }

    }

    useEffect(() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          nextSlide();
        }, 4000);
    
        return () => clearTimeout(timerRef.current);
      }, [nextSlide]);

      
    return(
        <>    
        
        <div className="big-container">
            {/* <div className="eng-bubble">
        
     <div className="eng-bubble-text">
         <hr style={{width: 300 } } className="first-line"/>
         <hr style={{width: 300 } } className="second-line" />
         <h1>Angličtina v Trnave</h1>
         <p>Nauč sa hovoriť a myslieť po anglicky!</p>
         <hr style={{width: 300 } }  className="bubble-dotted"/>
         <p>Pre úplných začiatočníkov i večných študentov</p>
         <p>Deti, dospelí, firemné kurzy.</p>
     </div>
     
     </div> */}
         <MediaQuery />  
        <div className="container-slider">
    {dataSlider.map((obj, index) => {
           return (
            <div 
            key={obj.id}
            className = {slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.webp`}></img>
            </div>
                
            )
        })
    }
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    {/* {setTimeout(nextSlide, 4000)}; */}

    

    

    
       
  
    </div>
   
    {/* <div className="line-container">
    <hr className="line"/>
      <hr className="thin" />
      <hr className="line-dotted"/>

    </div> */}

    {/* <Lines></Lines> tuto pojdu lines ked sa zmeni viewport a flexbox column */}
    <MediaQueryLines2></MediaQueryLines2>
    
    
    <div className="eng-bubble">
        
     <div className="eng-bubble-text">
         <hr className="first-line"/>
         <hr  className="second-line" />
         <h1>Angličtina v Trnave</h1>
         <p>Nauč sa hovoriť a myslieť po anglicky!</p>
         <hr className="bubble-dotted"/>
         <p>Pre úplných začiatočníkov i večných študentov</p>
         <p>Deti, dospelí, firemné kurzy.</p>
     </div>
     
     </div>
     </div>
    
    
    


    
   
     
     </>
    )
}

export default Slider2;
