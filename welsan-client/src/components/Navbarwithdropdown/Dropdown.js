import { useState } from "react"
import "./Dropdown.css";
import { Link, NavLink } from 'react-router-dom';
import { MenuItems } from "./MenuItems.js"    


export default function Dropdown(){
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    




    return(
        <>
        
         <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : 'dropdown-menu'}>
    
            {MenuItems.map((item,index)=>{
                return(
                        
                    <li key={index} >
                        <NavLink className={({isActive}) => isActive ? 'home dropdown-link' : 'dropdown-link' } to={item.path} onClick={() => setClick(false)}>
                        
                        {item.title}</NavLink></li>
                

                
                )
            })}
            


         </ul>
        
        </>
    )
}