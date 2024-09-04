import "./App.css";
import HeroSection from "./Components/HomeCompnents/HeroSection";
import OurWorks from "./Components/HomeCompnents/OurWorks";
import Footer from "./Components/Layout/Footer";
import INtigrations from "./Components/Intigrations/INtigrations";
// import Slider from "./Components/AllInOneSolution/Slider";
import About from "./Components/HomeCompnents/About";
import OurService from "./Components/HomeCompnents/OurService";
// import Slider from "./Components/AllInOneSolution/Slider";
function App() {
  return (
    <>
      <div>
        <HeroSection/>
        <About/>
        <OurService/>
        <OurWorks/>
        {/* <Slider/> */}
        <INtigrations/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
