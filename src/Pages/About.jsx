import { Loader } from "lucide-react";
import VideoBackground from "../Components/BlourBackground/VideoBackground";
// import OurTeam from "../Components/OurTeam/OurTeam";

const About = () => {
  return (
    <div className="aboutpage">
      {/* about-hero..... */}
     <div className="hero relative bg-[#00000094]  text-white lg:h-screen h-[200px] flex justify-center items-center">
        <VideoBackground/>
        <div className="hero-content text-center py-14 ">
          <div className="">
            <h5 className="md:text-5xl text-4xl lg:text-9xl ">Empowering Your</h5>
            <h5 className="md:text-5xl text-4xl lg:text-9xl">Digital Journey</h5>
          </div>
        </div>
      </div> 
  


      {/* intriducing britto------- */}
     <div className="bg-[#00000094]"> 
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-[80rem] lg:py-24 bg-[#0D0D0D] mb-10">
        <div className="aboutsection flex flex-col items-center">
          <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-12 border rounded-lg">
            <img
              className="w-[30px] rounded-full"
              src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
              alt=""
            />
            <div className="bg-gradient-to-b lg:text-2xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Introducing Britto Soft
            </div>{" "}
            <Loader className="text-white" />
          </div>
        </div>

        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h5 className="lg:text-[40px] text-[20px] font-normal lg:leading-[50px] text-[#4B4B4B] lg-px-32">
                <span className="bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text">
                  Developing Web Solutions
                </span>
                , Amplifying Reach, and Converting Traffic for Established
                Brands and
                <span className="bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text">
                  {" "}
                  New Ventures.
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div></div>

      {/* mission */}
      <div className="relative items-center w-full px-5 py-4 mx-auto md:px-12 lg:px-16 max-w-6xl lg:py-12 bg-black ">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="flex flex-col">
            <span className="lg:text-[60px] text-[40px] bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text mb-3">
              Our Mission
            </span>
            <span className="lg:text-[25px] text-[20px] text-white lg:pr-14">
              Creating user-focused, visually striking websites that deliver
              seamless, responsive experiences
            </span>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="h-100 w-100 object-cover lg:w-[500px] lg:h-[500px]"
              src="https://i.postimg.cc/mkLRC8Fx/Untitled-700-x-900-px-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* values---- */}
      <div className="relative items-center w-full px-5 py-4 mx-auto md:px-12 lg:px-16 max-w-6xl lg:py-24 bg-black mb-10 lg:mb-0">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-32">
          <div className="flex flex-col lg:order-2">
            <span className="lg:text-[60px] text-[40px] bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text mb-3">
              Our Values
            </span>
            <span className="lg:text-[25px] text-[20px] text-white lg:pr-14">
              Creating user-focused, visually striking websites that deliver
              seamless, responsive experiences
            </span>
          </div>
          <div className="order-1 ">
            <img
              className="h-100 w-100 object-cover lg:w-[500px] lg:h-[600px]"
              src="https://i.postimg.cc/DZdnSt0d/Untitled-700-x-900-px-1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* our team --------------------------------*/}
      {/* <OurTeam/> */}

      {/* revolution */}
      <div>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-[95rem] lg:py-24">
          <div className="aboutsection flex flex-col items-center">
            <span className="lg:text-[55px] text-[35px] text-center bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Revolutionize Your Online Presence
            </span>
            <h5 className="lg:text-[20px] font-normal lg:leading-[50px] text-white lg:px-44 text-center">
              Collaborate with Us for Unmatched Digital Excellence
            </h5>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-8">
            <button
              type="button"
              className="text-black px-16 bg-gradient-to-r from-white via-blue-300 text-2xl to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg font-semibold  py-2.5 text-center me-2 mb-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
