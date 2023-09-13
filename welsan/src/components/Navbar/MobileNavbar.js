import { Link, NavLink, useNavigate } from "react-router-dom";
import speech from './bubble3.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './navbar.css'
import { useState } from "react";
import Dropdown from "../Navbarwithdropdown/Dropdown";
import '../Navbarwithdropdown/Dropdown.css';
import DropdownMobile from "../Navbarwithdropdown/DropdownMobile";
import { IoMdArrowDropdown } from "react-icons/io";

function MobileNavbar() {

    const navRef = useRef();
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const [isMobile, setIsMobile] = useState(false);

    


    const toggleMobileMenu = () => {
       
        setIsMobile(!isMobile);
    }

    const closeMobileMenu = () => {
        setIsMobile(!isMobile);
    }

    const style = {
        textDecoration: "none",

    }

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        setIsMobile(!isMobile);

    }
    const onMouseLeave = () => {
        setIsMobile(isMobile);

    }

    let ActiveLink = 'home';
    let InActiveLink = 'home-white';


   







    return (
        <>
            <header>

                <div className="bubble">
                    <img src={speech} alt="Speech bubble"></img>

                </div>

                <div className="logo">
                    <h1><Link to="/">Welsan</Link></h1>
                </div>

                <nav ref={navRef}   >

                    {/* tuto ide burger2 */}
                    <ul className="ul-list" >
                        <li >
                            <NavLink to="/" className={({ isActive }) => isActive ? ActiveLink : InActiveLink} style={style}>
                                Domov
                            </NavLink>
                        </li>
                        <hr />
                        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            
                            
                            
                            
                                <NavLink
                                to="/o-kurzoch"
                                className={({ isActive }) => isActive ? ActiveLink : InActiveLink}
                                style={style}
                                 onClick={isMobile ? toggleMobileMenu : null}>        
                                      
                            O Kurzoch </NavLink>
                               
                            
                                
                                 <div className="dropdown-span" onClick={toggleMobileMenu}><IoMdArrowDropdown /></div>
                             
                            
                            {isMobile && <DropdownMobile />}

                        </li>
                        <hr />
                        <li><NavLink  to="/firemne-kurzy" className={({ isActive }) => isActive ? ActiveLink : InActiveLink} style={style}>Firemné kurzy</NavLink></li>
                        <hr />
                        <li><NavLink to="/kde-nas-najdete" className={({ isActive }) => isActive ? ActiveLink : InActiveLink} style={style}>Kde nás nájdete</NavLink></li>
                        <hr />
                        <li><NavLink to="/tlmocenie-a-preklady" className={({ isActive }) => isActive ? ActiveLink : InActiveLink} style={style}>Tlmočenie a preklady</NavLink></li>
                        <hr />
                        {/* <li><NavLink to="/blog" className={({isActive}) => isActive ? ActiveLink : InActiveLink} style={style}>Blog</NavLink></li> */}
                        {/* <hr /> */}
                    </ul>

                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes></FaTimes>
                    </button>


                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars></FaBars>
                </button>

            </header>


        </>




    )
}

export default MobileNavbar;