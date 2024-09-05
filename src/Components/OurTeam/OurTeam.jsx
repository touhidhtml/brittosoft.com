import { Facebook, Instagram, Linkedin, Loader } from "lucide-react";

const OurTeam = () => {
  return (
    <div>
      <div>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-[95rem] lg:py-24">
          <div className="aboutsection flex flex-col items-center">
            <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-12 border rounded-lg">
              <img
                className="w-[30px] rounded-full"
                src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
                alt=""
              />
              <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
                Our Team
              </div>{" "}
              <Loader className="text-white" />
            </div>
          </div>

          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h5 className="lg:text-[30px] text-[20px] font-normal lg:leading-[50px] text-white lg:px-44">
                  We re a passionate team of digital specialists who transform
                  your online presence into a powerful growth engine.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-3">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="container max-w-6xl  px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col p-4 border-[1px] border-gray-900 rounded-xl">
                      <a
                        href="#"
                        className="gradient-bg mx-auto rounded-xl mb-1"
                      >
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 m-auto lg:h-auto h-[250px] lg:w-[100%]"
                          src="https://i.postimg.cc/Xq1f01f4/Noman.png" /* "https://i.postimg.cc/WpgJn3FX/dipto.png" */
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h5 className="text-white text-xl font-bold mb-1">
                          Noman Dipto
                        </h5>

                        <div className="text-white font-light mb-2">
                          Front-end Developer
                        </div>

                        {/* social media links */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full text-white hover:bg-indigo-50 h-10 w-10"
                          >
                            <Facebook />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <Linkedin />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <Instagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col p-4 border-[1px] border-gray-900 rounded-xl">
                      <a
                        href="#"
                        className="gradient-bg mx-auto rounded-xl mb-1"
                      >
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 lg:h-auto h-[250px] lg:w-[100%]"
                          src="https://i.postimg.cc/GtmFVnsX/Ruddro.png" /* "https://i.postimg.cc/D0rJyjkt/ali.png" */
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h5 className="text-white text-xl font-bold mb-1">
                          Ali Ruddro
                        </h5>

                        <div className="text-white font-light mb-2">
                          Team Lead
                        </div>

                        {/* social media links */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full text-white hover:bg-indigo-50 h-10 w-10"
                          >
                            <Facebook />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <Linkedin />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <Instagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col p-4 border-[1px] border-gray-900 rounded-xl">
                      <a
                        href="#"
                        className="gradient-bg mx-auto rounded-xl mb-1"
                      >
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 lg:h-auto h-[250px] lg:w-[100%]"
                          src="https://i.postimg.cc/d1vmRyQP/Faisal.png" /* "https://i.postimg.cc/KjS3bXVP/foisal.png" */
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h5 className="text-white text-xl font-bold mb-1">
                          Foisal Ahmed
                        </h5>

                        <div className="text-white font-light mb-2">
                          Fullstack Developer
                        </div>

                        {/* social media links */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full text-white hover:bg-indigo-50 h-10 w-10"
                          >
                            <Facebook />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <Linkedin />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <Instagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col p-4 border-[1px] border-gray-900 rounded-xl">
                      <a
                        href="#"
                        className="gradient-bg mx-auto rounded-xl mb-1"
                      >
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 lg:h-auto h-[250px] lg:w-[100%]]"
                          src="https://i.postimg.cc/ydPhL8WJ/Touhidul.png" /* "https://i.postimg.cc/NMr2ZGNG/touhidul.png" */
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h5 className="text-white text-xl font-bold mb-1">
                          Touhidul Islam
                        </h5>

                        <div className="text-white font-light mb-2">
                          Front-end Developer
                        </div>

                        {/* social media links */}
                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full text-white hover:bg-indigo-50 h-10 w-10"
                          >
                            <Facebook />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <Linkedin />
                          </a>

                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <Instagram />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
