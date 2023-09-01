import React, { useState } from 'react'
import { useEffect } from 'react'

const ScreenSize = () => {

    const [windowDimension, setWindowDimension] = useState({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,


    })

    const detectSize = () => {
        setWindowDimension({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,


        })
    }

    useEffect(() => {
        window.addEventListener('resize',detectSize)

        return() => {
            window.removeEventListener('resize',detectSize)
        }
        
    }, [windowDimension])

    const [hidden, setHidden] = useState(false)

  const onClick = () =>{
    if(windowDimension.winWidth > 1110){
        setHidden(hidden)
        

    }
  }



  

  return (
    <div>
      <p>{windowDimension.winWidth}</p>
      <p>{windowDimension.winHeight}</p>
      <div onChange={()=>onClick(true)} className={`line-container ${!hidden ? `visible` : '' }`} >
            <hr className="line"/>
            <hr className="thin"/>
            <hr className="line-dotted" />
        </div>
       
    </div>
  )
}

export default ScreenSize;
