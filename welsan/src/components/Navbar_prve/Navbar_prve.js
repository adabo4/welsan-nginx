import { Link } from "react-router-dom";
import speech from '../bubble3.png';
import Burger from "./Burger";
import RightNav from "../Navbar/RightNav";
import Burger2 from "../Burger2";
import "navbar.css";


function Navbar() {

    const style = {
        textDecoration: "none",

    }
    return (
        <>

            <nav>
                <div className="logo">
                    <h1><Link to="/">Welsan</Link></h1>
                </div>
                <div className="bubble">
                    <img src={speech}></img>

                </div>
                <Burger2></Burger2>

            </nav>

        </>




    )
}

export default Navbar;