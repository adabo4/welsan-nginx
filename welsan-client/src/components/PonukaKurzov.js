import Ponuka from "./Ponuka";
import Kurzy from './Kurzy/Kurzy.js'
import Footer from "./Footer/Footer"
import MobileNavbar from "./Navbar/MobileNavbar";

function PonukaKurzov() {
    return (

        <div className="o-kurzoch">
            <MobileNavbar />
            <Ponuka />
            <Kurzy></Kurzy>
            <Footer></Footer>

        </div>
    )
}

export default PonukaKurzov;