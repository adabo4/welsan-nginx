import React from 'react'
import ImageSlider3 from './ImageSlider3';

const Slider3 = () => {

    const slides = [
        {url: '/Imgs/img1.webp',
         title: 'london1'
        },
        {url: '/Imgs/img2.webp',
         title: 'london2'
        },
        {url: '/Imgs/img3.webp',
         title: 'london3'
        },
        {url: '/Imgs/img4.webp',
         title: 'london4'
        },


    ];

    const containerStyles = {
       width: "800px",
       height: "500px",
       margin: "0 auto",
       
        // paddingBottom:"56%",
       
        
      };
      return (
        <div>
          
          <div style={containerStyles} >
            <ImageSlider3 slides={slides} parentWidth={800} />
          </div>
        </div>
      )
}

export default Slider3
