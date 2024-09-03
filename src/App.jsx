import { Loader } from "lucide-react";
import "./App.css";
import HeroSection from "./Components/HomeCompnents/HeroSection";
import Header from "./Components/Layout/Header";
import { useState } from "react";
import Carousel from "./Components/AllInOneSolution/Carousel";
function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const downSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const upSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <>
      <div>
        <Header />
        <HeroSection />

        {/* About Section */}
        <div className="aboutsection flex flex-col items-center bg-black py-20">
          <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
            <img
              className="w-[30px] rounded-full"
              src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
              alt=""
            />
            <div className="bg-gradient-to-b text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Our Service
            </div>{" "}
            <Loader />
          </div>

          <section className="bg-transparent z-1 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
                Driving Digital Evolution and <br />
                <span className="text-[#594FEE]">Strategic Excellence</span>
              </h2>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                We create digital solutions that push boundaries, elevate user
                experiences, <br /> and drive business growth.
              </p>
            </div>
            <div className="aboutcard grid lg:grid-cols-3 justify-stretch  lg:gap-10">
              <div className="card border bg-[#1F1F1F] rounded-lg p-10 flex flex-col gap-0 justify-center items-center">
                {" "}
                <h2 className="m-0 p-0 leading-10 mb-5 ">+100</h2>{" "}
                <p>Team Member</p>
              </div>
              <div className="card border bg-[#1F1F1F] rounded-lg p-10 flex flex-col gap-0 justify-center items-center">
                {" "}
                <h2 className="m-0 p-0 leading-10 mb-5 ">+100</h2>{" "}
                <p>Team Member</p>
              </div>
              <div className="card border bg-[#1F1F1F] rounded-lg p-10 flex flex-col gap-0 justify-center items-center">
                {" "}
                <h2 className="m-0 p-0 leading-10 mb-5 ">+100</h2>{" "}
                <p>Team Member</p>
              </div>
            </div>
          </section>
        </div>

        {/* Our Service Section */}
        <div className="aboutsection flex flex-col items-center bg-black py-20">
          <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
            <img
              className="w-[30px] rounded-full"
              src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
              alt=""
            />
            <div className="bg-gradient-to-b text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
              About Us
            </div>{" "}
            <Loader />
          </div>

          <section className="bg-transparent z-1 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
                Driving Digital Evolution and <br />
                <span className="text-[#594FEE]">Strategic Excellence</span>
              </h2>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                We create digital solutions that push boundaries, elevate user
                experiences, <br /> and drive business growth.
              </p>
            </div>
            <div className="serviceacordionsection">
              {/* Accordion Item 1 */}
              <div className="border-b border-slate-200">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex justify-between items-center py-5 text-white"
                >
                  <h3>1. Content Creation</h3>
                  <span className="text-white transition-transform duration-300">
                    {openIndex === 1 ? downSVG : upSVG}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{
                    maxHeight: openIndex === 1 ? "200px" : "0",
                  }}
                >
                  <div className="pb-5 text-sm text-white text-[20px] lg:w-1220px overflow-hidden">
                    Dive into a world where your brand s voice echoes across the
                    digital landscape.
                    <br /> Our strategic approach to Marketing & Branding not
                    only elevates your identity but also connects you with your{" "}
                    <br /> audience like never before. From SEO and PPC
                    campaigns to social media storytelling, we craft experiences
                    that resonate
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="border-b border-slate-200">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex justify-between items-center py-5 text-white"
                >
                  <h3>2. How to use Material Tailwind?</h3>
                  <span className="text-white transition-transform duration-300">
                    {openIndex === 2 ? downSVG : upSVG}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{
                    maxHeight: openIndex === 2 ? "200px" : "0",
                  }}
                >
                  <div className="pb-5 text-sm text-white text-[20px]">
                    You can use Material Tailwind by importing its components
                    into your Tailwind CSS project.
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="border-b border-slate-200">
                <button
                  onClick={() => toggleAccordion(3)}
                  className="w-full flex justify-between items-center py-5 text-white"
                >
                  <h3>3. What can I do with Material Tailwind?</h3>
                  <span className="text-white transition-transform duration-300">
                    {openIndex === 3 ? downSVG : upSVG}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{
                    maxHeight: openIndex === 3 ? "200px" : "0",
                  }}
                >
                  <div className="pb-5 text-sm text-white text-[20px]">
                    Material Tailwind allows you to quickly build modern,
                    responsive websites with a focus on design.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



        {/* ----------------- */}
        <Carousel />
       
        {/* --------------- */}
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
