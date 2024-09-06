// import BlourBackground from "../BlourBackground/BlourBackground";
import VideoBackground from "../BlourBackground/VideoBackground";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section Starts Here------------------------- */}
      <div className="relative pt-20">
        <section className=" z-[999] bg-[#0000000e] ">
          {/* <BlourBackground /> */}
          <VideoBackground />
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Turning Digital <br /> Dreams to <br className="brm" /> Reality
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
              We build websites, drive <br className="brm" /> traffic, and fuel
              conversions <br /> for industry leaders & startups..
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="text-black px-16 bg-gradient-to-r from-white via-blue-300 text-2xl to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg font-semibold  py-2.5 text-center me-2 mb-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
