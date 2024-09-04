import { Loader } from "lucide-react";

const About = () => {
    return (
        <div className="aboutsection flex flex-col items-center bg-black py-20">
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
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
              We create digital solutions that push boundaries, elevate user <br className="brm"/>
              experiences, <br className="br"/> and drive <br className="brm"/> business growth.
            </p>
          </div>
          <div className="aboutcard grid lg:grid-cols-3 justify-stretch px-6 lg:px-0 gap-6 lg:gap-10">
            <div className="card border bg-[#1f1f1f00] rounded-lg p-6 lg:p-10 flex flex-col gap-0 justify-center items-center">
              {" "}
              <h2 className="m-0 p-0 leading-10 mb-2 lg:mb-5 text-white">+100</h2>{" "}
              <p>Team Member</p>
            </div>
            <div className="card border bg-[#1f1f1f00] rounded-lg p-6 lg:p-10 flex flex-col gap-0 justify-center items-center">
              {" "}
              <h2 className="m-0 p-0 leading-10 mb-2 lg:mb-5 text-white">+100</h2>{" "}
              <p>Team Member</p>
            </div>
            <div className="card border bg-[#1f1f1f00] rounded-lg p-6 lg:p-10 flex flex-col gap-0 justify-center items-center">
              {" "}
              <h2 className="m-0 p-0 leading-10 mb-2 lg:mb-5 text-white">+100</h2>{" "}
              <p>Team Member</p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default About;