import Menu from "./Menu.js";
import Kurzy from './Kurzy/Kurzy.js'
import Footer from "./Footer/Footer"
import MobileNavbar from "./Navbar/MobileNavbar";

function PonukaKurzov() {
    return (

        <div className="o-kurzoch">
            <MobileNavbar />
            <Menu />
            <Kurzy></Kurzy>
            <Footer></Footer>
        </div>
    )
}

export default PonukaKurzov;