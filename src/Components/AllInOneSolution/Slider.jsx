import { Loader } from "lucide-react";

const Slider = () => {
    
  return (
    <div>
      {/* All In One Solutions Section */}
      <div className="aboutsection flex flex-col items-center bg-black py-20">
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
            All In One Solutions
          </div>{" "}
          <Loader />
        </div>

        <section className="bg-transparent z-1 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
              Streamline Your <br />
              <span className="text-[#594FEE]">Digital Success</span>
            </h2>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
              We offer comprehensive digital solutions, integrating marketing,
              design, technology, <br /> and content into a unified strategy.
            </p>
          </div>
          <div className="solutionsmarquee flex overflow-hidden">
            <marquee>
              <div className="flex gap-5 overflow-hidden">
                {/* Item-1 */}
                <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-[#141415] p-10">
                  <a href="#">
                    <img
                      className="rounded-t-lg h-[250px] bg-black"
                      src="https://i.postimg.cc/XJH2qvpF/SCIENCE.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pt-5 overflow-hidden">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        WordPress
                      </h5>
                    </a>
                  </div>
                </div>
                {/* Item-1 */}
                <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-[#141415] p-10">
                  <a href="#">
                    <img
                      className="rounded-t-lg h-[250px] w-[200px] bg-black"
                      src="https://i.postimg.cc/XJH2qvpF/SCIENCE.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pt-5 overflow-hidden">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        WordPress
                      </h5>
                    </a>
                  </div>
                </div>

                {/* Item-2 */}
                <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-[#141415] p-10">
                  <a href="#">
                    <img
                      className="rounded-t-lg h-[250px] bg-black"
                      src="https://i.postimg.cc/XJH2qvpF/SCIENCE.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pt-5 overflow-hidden">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        React
                      </h5>
                    </a>
                  </div>
                </div>

                {/* Item-3 */}
                <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-[#141415] p-10">
                  <a href="#">
                    <img
                      className="rounded-t-lg h-[250px] bg-black"
                      src="https://i.postimg.cc/XJH2qvpF/SCIENCE.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pt-5 overflow-hidden">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        NodeJs
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </marquee>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Slider;
