import { useState } from 'react'
import img1 from '../img/1.webp'
import img2 from '../img/2.webp'
import img3 from '../img/3.webp'
import images from '../Slider/dataSlider'

function Slider(props) {

    return (
        <div>
            <div className="carousel" >
                
                <a className='prev' >&#10094;</a>
                <a className='next' > &#10095;</a>
                <ul>
                    <li className='slide'><img src={props.source} ></img></li>
                    <li className='slide'><img src={props.source} ></img></li>
                 
                </ul>


            </div>
        </div>
    )

}

export default Slider;