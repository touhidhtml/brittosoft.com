import "./App.css";
import HeroSection from "./Components/HomeCompnents/HeroSection";
import OurWorks from "./Components/HomeCompnents/OurWorks";
import INtigrations from "./Components/HomeCompnents/INtigrations";
import About from "./Components/HomeCompnents/About";
import OurService from "./Components/HomeCompnents/OurService";
function App() {
  return (
    <>
      <div>
        <HeroSection />
        <About />
        <OurService />
        <OurWorks />
        {/* Testimonial section comented-------------- remove comment to use ------- */}
        {/* <div className="flex flex-col gap-6 items-center bg-black">
          <SectionHeading title={"What Our Client Says"} />
          <TestimonialSlider />
        </div> */}
        <INtigrations />
      </div>
    </>
  );
}

export default App;
