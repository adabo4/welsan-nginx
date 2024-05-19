import { Link } from "react-router-dom";
import speech from '../Navbar/bubble3.png'

export default function MixedNavbar(){
    return(
        <>

            <header>
            <div className="bubble">
                    <img src={speech}></img>

                </div>

                <div className="logo">
                    <h1><Link to="/">Welsan</Link></h1>
                </div>
            </header>

        </>
    )
}

