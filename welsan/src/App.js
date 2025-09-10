import './App.css';
import Slider from './components/Slider/Slider.js';
import About from './components/About/About';
import Kurzy from './components/Kurzy/Kurzy';
import Footer from './components/Footer/Footer';
import Bubbles2 from './components/Bubbles/Bubbles2';
import './components/BusinessCourses/businesscourses.css'
import './components/menu.css'
import './components/PonukaKurzov'
import MobileNavbar from './components/Navbar/MobileNavbar';
import KurzyHeadlineAutumn from './components/Kurzy/KurzyHeadlineAutumn.js';

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <Slider></Slider>
      <Bubbles2></Bubbles2>
      <About></About>
      <div className="kurzy-container">

        <KurzyHeadlineAutumn></KurzyHeadlineAutumn>
      </div>
      <Kurzy></Kurzy>
      <Footer></Footer>
    </div>
  );
}

export default App;
