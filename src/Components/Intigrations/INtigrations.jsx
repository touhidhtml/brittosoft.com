import { Loader } from "lucide-react";
import { FaHtml5 } from "react-icons/fa";

const INtigrations = () => {
  const items = 8;

  // Create an array of items to map over
  const itemArray = new Array(items).fill(null);
  return (
    <div>
      <div className="aboutsection flex flex-col items-center bg-black py-20">
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
          Integrations
          </div>{" "}
          <Loader />
        </div>

        <section className="bg-transparent z-1  ourservice-acordion-container">
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
          <div className="relative mx-auto   w-[500px] h-[500px] rounded-full">
            <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {itemArray.map((_, index) => (
                <FaHtml5
                  key={index}
                  className="absolute animate-circle w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4"
                  // Calculate delay based on item index and total items for even spacing
                  style={{ animationDelay: `${(index * 10) / items}s` }} // Spread evenly across 10s duration
                />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {itemArray.map((_, index) => (
                <FaHtml5
                  key={index}
                  className="absolute animate-circle2 w-24 h-24 border-solid border-2 bg-black rounded-full text-white p-4"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default INtigrations;
