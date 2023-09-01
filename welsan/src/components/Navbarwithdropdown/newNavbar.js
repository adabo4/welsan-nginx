import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';
import './newNavbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function NewNavbar(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960 ) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }

    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960 ) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }

    }


    return(
        <>

        <nav className="navbar">
            <Link to="/" className='navbar-logo nav-links'>
               <h1>Welsan</h1> 
            </Link>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links home'>
                        Home
                    </Link>
                </li>
                <li className='nav-item' 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <Link to='/o-kurzoch' className='nav-links'>
                        O kurzoch
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/firemne-kurzy' className='nav-links'>
                        Firemné kurzy
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/kde-nas-najdete' className='nav-links'>
                        Kde nás nájdete
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/tlmocenie-a-preklady' className='nav-links'>
                        Tlmočenie a preklady
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/blog' className='nav-links'>
                        Blog
                    </Link>
                </li>

            </ul>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                

            </div>

        </nav>
        </>
    )
}
export default NewNavbar;