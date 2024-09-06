import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaWordpress } from "react-icons/fa";
import SectionHeading from "../Comoncomponents/SectionHeading";

const INtigrations = () => {
  const items = [
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaWordpress
  ];

  return (
    <div>
      <div className="aboutsection flex flex-col items-center bg-black py-20">
        <SectionHeading title={"Integrations"}/>
        
        <section className="bg-transparent z-1 ourservice-acordion-container">
          <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h2 className="mb-4 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Driving Digital Evolution and <br />
              <span className="text-[#594FEE]">Strategic Excellence</span>
            </h2>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
              We create digital solutions that push boundaries, elevate user{" "}
              <br className="brm" />
              experiences, <br className="br" /> and drive{" "}
              <br className="brm" /> business growth.
            </p>
          </div>
          <div className="relative mx-auto w-[300px] h-[300px] rounded-full lg:mt-8 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {items.map((Icon, index) => (
                <Icon
                  key={index}
                  className="absolute animate-circle lg:w-24 lg:h-24 w-16 h-16 border-solid border-2 bg-black rounded-full text-white p-4"
                  style={{ animationDelay: `${(index * 10) / items.length}s` }}
                />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {items.map((Icon, index) => (
                <Icon
                  key={index}
                  className="absolute animate-circle2 lg:w-24 lg:h-24 w-16 h-16 border-solid border-2 bg-black rounded-full text-white p-4"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default INtigrations;
