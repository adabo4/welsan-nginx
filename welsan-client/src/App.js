import './App.css';
import Slider2 from './components/Slider/Slider2';
import About from './components/About/About';
import Kurzy from './components/Kurzy/Kurzy';
import Footer from './components/Footer/Footer';
import Bubbles2 from './components/Bubbles/Bubbles2';
import KurzyHeadline from './components/Kurzy/KurzyHeadline';
import './components/FiremneKurzy/firemnekurzy.css'
import './components/ponuka.css'
import './components/PonukaKurzov'
import MobileNavbar from './components/Navbar/MobileNavbar';

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <Slider2></Slider2>
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
