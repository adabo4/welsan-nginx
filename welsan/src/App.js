import './App.css';
import Slider from './components/Slider/Slider.js';
import About from './components/About/About';
import Kurzy from './components/Kurzy/Kurzy';
import Footer from './components/Footer/Footer';
import Bubbles2 from './components/Bubbles/Bubbles2';
import KurzyHeadlineSpring from './components/Kurzy/KurzyHeadlineSpring.js';
import './components/BusinessCourses/businesscourses.css'
import './components/menu.css'
import './components/PonukaKurzov'
import MobileNavbar from './components/Navbar/MobileNavbar';

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <Slider></Slider>
      <Bubbles2></Bubbles2>
      <About></About>
      <div className="kurzy-container">
        <KurzyHeadlineSpring></KurzyHeadlineSpring>
      </div>
      <Kurzy></Kurzy>
      <Footer></Footer>
    </div>
  );
}

export default App;
