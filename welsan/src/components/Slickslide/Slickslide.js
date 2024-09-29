import React, { Component } from "react";
import Slider from "react-slick";
import "./slickslide.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


export default function Slickslide () {

  const slider = React.useRef(null);
    
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 3000,
            autoplaySpeed: 3000
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="carousel">
        <button className="btn-prev" onClick={() => slider?.current?.slickPrev()}><BsFillArrowLeftCircleFill size={"25px"}/></button>
        
        
        <Slider ref={slider}  {...settings}>
          <div className="box">
            <h3><img src={require('../sliderimages/1.webp')}></img></h3>
          </div>
          <div className="box">
            <h3><img src={require('../sliderimages/2.webp')}></img></h3>
          </div>
          <div className="box">
            <h3><img src={require('../sliderimages/3.webp')}></img></h3>
          </div>
          <div className="box">
            <h3><img src={require('../sliderimages/4.webp')}></img></h3>
          </div>
        </Slider>
        <button className="btn-next" onClick={() => slider?.current?.slickNext()}><BsFillArrowLeftCircleFill size={"25px"}/></button>
      </div>
    );
  }
