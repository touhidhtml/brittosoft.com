/* eslint-disable react/no-unescaped-entities */
import { BlendIcon, FolderGit2, Telescope } from "lucide-react";
import VideoBackground from "../Components/BlourBackground/VideoBackground";
import Card from "../Components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeading from "../Components/Comoncomponents/SectionHeading";
const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("./data/services.json")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);
  return (
    <div className="servicepage">
      {/* service-hero..... */}
      <div className="hero relative bg-[#0000000e]  text-white lg:h-screen h-[300px] bg:h-[200px] flex justify-center items-center">
        <VideoBackground />
        <div className="hero-content text-center py-14 ">
          <div className="">
            <h5 className="md:text-5xl text-4xl lg:text-9xl mt-[-100px]">
              Our Services
            </h5>
          </div>
        </div>
      </div>

      {/* explore section----- */}
      <div>
        <div className="relative items-center w-full px-5 bg-black   mx-auto lg:mb-10 mb-20  md:px-12 lg:px-16 max-w-[95rem] lg:py-20">
          <div className="aboutsection flex flex-col items-center">
            <span className="lg:text-[55px] text-[35px] text-center bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Explore our array of top-tier services tailored to meet your needs
            </span>
            <h5 className="lg:text-[20px] font-normal lg:leading-[50px] text-white lg:px-44 text-center">
              Unleashing Potential, Driving Success: Discover the Power of
              Integrated Digital Solutions with Britto Soft
            </h5>
          </div>
        </div>
      </div>

      {/* our process--- */}
      <div className="lg:mb-40 mb-20">
        <div className="aboutsection flex flex-col items-center ">
          <div className="mb-6">
            <SectionHeading title="Our Process" />
          </div>
          <span className="lg:text-[35px] text-[20px] text-center text-gray-400">
            Top–notch designs,
            <br />
            delivered at your doorstep.
          </span>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          {/* card-1----- */}
          <div className="p-4 max-w-sm w-[300px] lg:w-[400px]">
            <div className="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
              <div className="flex items-center mb-10">
                <div className="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full  bg-[#131313] text-white flex-shrink-0">
                  <Telescope size={50} color="#5148D9" />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-white text-2xl">
                  Tell us your vision
                </p>
                <p className="leading-relaxed text-slate-500 text-md">
                  Choose a plan and share your design project details with us:
                  we’re here to listen.
                </p>
              </div>
            </div>
          </div>

          {/* card-2----- */}
          <div className="p-4 max-w-sm w-[300px] lg:w-[400px]">
            <div className="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
              <div className="flex items-center mb-10">
                <div className="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full  bg-[#131313] text-white flex-shrink-0">
                  <BlendIcon size={50} color="#5148D9" />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-white text-2xl">
                  Receive the magic
                </p>
                <p className="leading-relaxed text-slate-500 text-md">
                  Sit back and relax: our expert designers will turn your vision
                  into reality.
                </p>
              </div>
            </div>
          </div>

          {/* card-3----- */}
          <div className="p-4 max-w-sm w-[300px] lg:w-[400px]">
            <div className="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
              <div className="flex items-center mb-10">
                <div className="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full  bg-[#131313] text-white flex-shrink-0">
                  <FolderGit2 size={50} color="#5148D9" />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-white text-2xl">
                  Get ongoing support
                </p>
                <p className="leading-relaxed text-slate-500 text-md">
                  Your subscription ensures you have continuous access to our
                  design team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what you will get */}
      <div className="lg:mb-40 mb-20">
        <div className="aboutsection flex flex-col items-center ">
          {/* Section Heading----------- */}
          <div className="mb-6"><SectionHeading title="What You'll Get" /></div>
          <span className="lg:text-[35px]  p-6 text-[20px] text-center text-gray-400">
            We resolve problems associated with creative procedures.
          </span>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          {/* card-1----- */}
          <div className="p-4 w-[300px] lg:w-[500px]">
            <div className="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
              <div className="flex items-center justify-center mb-4">
                <div className="lg:w-60  w-40 inline-flex items-center justify-center flex-shrink-0">
                  <img src="/public/all-img/growth.png" alt="" />
                </div>
              </div>
              <span className="bg-gradient-to-b text-center lg:text-xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
                Innovative Solutions for Unstoppable Growt
              </span>
            </div>
          </div>

          {/* card-2----- */}
          <div className="p-4  w-[300px] lg:w-[500px]">
            <div className="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
              <div className="flex items-center justify-center mb-4">
                <div className="lg:w-60  w-40 inline-flex items-center justify-center flex-shrink-0">
                  <img src="/public/all-img/plan.png" alt="" />
                </div>
              </div>
              <span className="bg-gradient-to-b text-center lg:text-xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
                Driving Growth, One Solution at a Time
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* All in one-- */}
      <div className="mb-40">
        <div className="flex flex-col items-center mb-6">
          <SectionHeading title="All In One Service" />
        </div>

        {/* all services------ ---------------------------------*/}
        <Card data={services} />
        {/* ------------------------------------------------------ */}
      </div>
    </div>
  );
};

export default Service;
