import Navbar from "./Navbar/Navbar";
import Ponuka from "./Ponuka";
import Kurzy from './Kurzy/Kurzy.js'
import Footer from "./Footer/Footer"

function PonukaKurzov(){
    return(

        <div className="o-kurzoch">
             <Navbar /> 
            
            
            {/* <Slider3 /> */}

            <Ponuka />           

            <Kurzy></Kurzy>
            <Footer></Footer>

        </div>
    )
}

export default PonukaKurzov;