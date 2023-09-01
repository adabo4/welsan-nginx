import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/zaloha/Slider';
import images from './components/Slider/dataSlider';
import Slider2 from './components/Slider/Slider2';
import Lines from './components/Lines/Lines';
import Bubbles from './components/zaloha/Bubbles';
import About from './components/About/About';
import Kurzy from './components/Kurzy/Kurzy';
import Footer from './components/Footer/Footer';
import Bubbles2 from './components/Bubbles/Bubbles2';
import Burger from './components/zaloha/Burger';
import Burger2 from '../src/components/Navbar_prve/Burger2';
import MediaQuery from './components//MediaQueryLines/MediaQuery';
import useMediaQuery from './components/MediaQueryLines/useMediaQuery';
import KurzyHeadline from './components/Kurzy/KurzyHeadline';
import FiremneKurzy from './components/FiremneKurzy/FiremneKurzy'
import './components/FiremneKurzy/firemnekurzy.css'
import NewNavbar from './components/Navbarwithdropdown/newNavbar';
import MixedNavbar from './components/MixedNavbar/MixedNavbar';
import Ponuka from './components/Ponuka';
import './components/ponuka.css'
import './components/PonukaKurzov'
import PonukaKurzov from './components/PonukaKurzov';


function App() {


  return (
    <div className="App">


      <Navbar />


      <Slider2></Slider2>
      {/* <Lines ></Lines> */}


      <Bubbles2></Bubbles2>

      <About></About>
      <div className="kurzy-container">
        <KurzyHeadline></KurzyHeadline>
      </div>
      <Kurzy></Kurzy>
      <Footer></Footer>






    </div>
  );
}

export default App;
