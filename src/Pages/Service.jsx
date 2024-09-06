import { BlendIcon, FolderGit2, Loader, Telescope } from "lucide-react";
import VideoBackground from "../Components/BlourBackground/VideoBackground";

const Service = () => {
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
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-8 border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b lg:text-2xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
            Our Process
          </div>{" "}
          <Loader className="text-white" />
        </div>
        <span className="lg:text-[35px] text-[20px] text-center text-gray-400">
          Top–notch designs,
          <br />
          delivered at your doorstep.
        </span>
      </div>

      <div class="flex flex-wrap justify-center mt-10">
        {/* card-1----- */}
        <div class="p-4 max-w-sm w-[300px] lg:w-[400px]">
          <div class="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
            <div class="flex items-center mb-10">
              <div class="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full  bg-[#131313] text-white flex-shrink-0">
                <Telescope size={50} color="#5148D9" />
              </div>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-white text-2xl">
                Tell us your vision
              </p>
              <p class="leading-relaxed text-slate-500 text-md">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>

        {/* card-2----- */}
        <div class="p-4 max-w-sm w-[300px] lg:w-[400px]">
          <div class="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
            <div class="flex items-center mb-10">
              <div class="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full  bg-[#131313] text-white flex-shrink-0">
                <BlendIcon size={50} color="#5148D9"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-white text-2xl">
              Receive the magic
              </p>
              <p class="leading-relaxed text-slate-500 text-md">
              Sit back and relax: our expert designers will turn your vision into reality.
              </p>
            </div>
          </div>
        </div>

        {/* card-3----- */}
        <div class="p-4 max-w-sm w-[300px] lg:w-[400px]">
          <div class="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
            <div class="flex items-center mb-10">
              <div class="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full  bg-[#131313] text-white flex-shrink-0">
                <FolderGit2 size={50} color="#5148D9"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-white text-2xl">
              Get ongoing support
              </p>
              <p class="leading-relaxed text-slate-500 text-md">
                Your subscription ensures you have continuous access to our design team.
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>


      {/* what you will get */}
      <div className="lg:mb-40 mb-20">

      <div className="aboutsection flex flex-col items-center ">
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-6 border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b lg:text-2xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
            What You'll Get
          </div>
          <Loader className="text-white" />
        </div>
        <span className="lg:text-[35px]  p-6 text-[20px] text-center text-gray-400">
        We resolve problems associated with creative procedures.
        </span>
      </div>



      
      <div class="flex flex-wrap justify-center mt-10">
        {/* card-1----- */}
        <div class="p-4 w-[300px] lg:w-[500px]">
          <div class="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class="lg:w-60  w-40 inline-flex items-center justify-center flex-shrink-0">
                <img src="/public/all-img/growth.png"  alt="" />
              </div>
            </div>
            <span className="bg-gradient-to-b text-center lg:text-xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Innovative Solutions for Unstoppable Growth
              </span>
          </div>
        </div>

        {/* card-2----- */}
        <div class="p-4  w-[300px] lg:w-[500px]">
          <div class="flex rounded-2xl h-full  bg-[#161616] p-8  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class="lg:w-60  w-40 inline-flex items-center justify-center flex-shrink-0">
                <img src="/public/all-img/plan.png"  alt="" />
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
      <div className="aboutsection flex flex-col items-center ">
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-6 border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b lg:text-2xl text-sm from-white to-gray-500 text-transparent font-bold bg-clip-text">
            All In One Service
          </div>
          <Loader className="text-white" />
        </div>
      </div>

      {/* all services------ ---------------------------------*/}
      {/* service row-1 */}
      <div class="flex flex-wrap justify-center mt-10 gap-4">
        {/* card-1----- */}
        <div class="p-4 max-w-sm lg:w-[400px] w-[300px] border-[1px] border-gray-800 rounded-2xl">
          <div class="flex rounded-2xl h-full  p-2  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class="inline-flex items-center justify-center flex-shrink-0 p-6">
                <img className="lg:w-[200px] w-[150px]" src="/public/all-img/browser.png" alt="" />
              </div>
            </div>
            <div class="flex flex-col justify-center items-center flex-grow">
              <p class="leading-relaxed mb-4 text-[18px] lg:text-[26px] bg-gradient-to-b  from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Website Development 
              </p>
              <p class="leading-relaxed text-white text-[15px] text-center">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>

        {/* card-2----- */}
        <div class="p-4 max-w-sm lg:w-[400px] w-[300px] border-[1px] border-gray-800 rounded-2xl">
          <div class="flex rounded-2xl h-full   p-2  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class=" inline-flex items-center justify-center flex-shrink-0 p-6">
              <img className="lg:w-[200px] w-[150px]" src="/public/all-img/error.png" alt="" />
              </div>
            </div>
            <div class="flex flex-col justify-between items-center flex-grow">
              <p class="leading-relaxed mb-4 text-[18px] lg:text-[26px] bg-gradient-to-b  from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Ecommerce Development
              </p>
              <p class="leading-relaxed text-white text-[15px] text-center">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>

        {/* card-3----- */}
        <div class="p-4 max-w-sm lg:w-[400px] w-[300px] border-[1px] border-gray-800 rounded-2xl">
          <div class="flex rounded-2xl h-full   p-2  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class=" inline-flex items-center justify-center flex-shrink-0 p-6">
              <img className="lg:w-[200px] w-[150px]" src="/public/all-img/error.png" alt="" />
              </div>
            </div>
            <div class="flex flex-col justify-between items-center flex-grow">
              <p class="leading-relaxed mb-4 text-[18px] lg:text-[26px] bg-gradient-to-b  from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Responsive Web Design 
              </p>
              <p class="leading-relaxed text-white text-[15px] text-center">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>
        
      </div>

      {/* service row-2 */}
      <div class="flex flex-wrap justify-center lg:mt-10 mt-4 gap-4">
        {/* card-1----- */}
        <div class="p-4 max-w-sm lg:w-[400px] w-[300px] border-[1px] border-gray-800 rounded-2xl">
          <div class="flex rounded-2xl h-full   p-2  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class=" inline-flex items-center justify-center flex-shrink-0 p-6">
              <img className="lg:w-[200px] w-[150px]" src="/public/all-img/computer-case.png" alt="" />
              </div>
            </div>
            <div class="flex flex-col justify-center items-center flex-grow">
              <p class="leading-relaxed mb-4 text-[18px] lg:text-[26px] bg-gradient-to-b  from-white to-gray-500 text-transparent font-bold bg-clip-text">
              CMS Development
              </p>
              <p class="leading-relaxed text-white text-[15px] text-center">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>

        {/* card-2----- */}
        <div class="p-4 max-w-sm lg:w-[400px] w-[300px]  border-[1px] border-gray-800 rounded-2xl">
          <div class="flex rounded-2xl h-full  p-2  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class=" inline-flex items-center justify-center flex-shrink-0 p-6">
              <img className="lg:w-[200px] w-[150px]" src="/public/all-img/web-design (1).png" alt="" />
              </div>
            </div>
            <div class="flex flex-col justify-center items-center flex-grow">
              <p class="leading-relaxed mb-4 text-[18px] lg:text-[26px] bg-gradient-to-b  from-white to-gray-500 text-transparent font-bold bg-clip-text">
              Web Application
              </p>
              <p class="leading-relaxed text-white text-[15px] text-center">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>

        {/* card-3----- */}
        <div class="p-4 max-w-sm lg:w-[400px] w-[300px]  border-[1px] border-gray-800 rounded-2xl">
          <div class="flex rounded-2xl h-full  p-2  flex-col">
            <div class="flex items-center justify-center mb-4">
              <div class=" inline-flex items-center justify-center flex-shrink-0 p-6">
              <img className="lg:w-[200px] w-[150px]" src="/public/all-img/web-design (1).png" alt="" />
              </div>
            </div>
            <div class="flex flex-col justify-center items-center flex-grow">
              <p class="leading-relaxed mb-4 text-[18px] lg:text-[26px] bg-gradient-to-b  from-white to-gray-500 text-transparent font-bold bg-clip-text">
              E-commerce Solution
              </p>
              <p class="leading-relaxed text-white text-[15px] text-center">
                Choose a plan and share your design project details with us:
                we’re here to listen.
              </p>
            </div>
          </div>
        </div>
        
      </div>


      </div>
      


    </div>
  );
};

export default Service;
