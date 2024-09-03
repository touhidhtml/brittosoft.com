import { Loader } from "lucide-react";

const Carousel = () => {
  return (
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
            Driving Digital Evolution and <br />
            <span className="text-[#594FEE]">Strategic Excellence</span>
          </h2>
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
            We create digital solutions that push boundaries, elevate user
            experiences, <br /> and drive business growth.
          </p>
        </div>
        <div className="hero min-h-screen mt-12">
          <div className="hero-content text-center">
            <div className="w-full">
              {/* Cards section */}
              <marquee direction="right">
                <div className="flex w-full gap-12">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="relative bg-white border shadow-sm rounded-2xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                    >
                      <img
                        className="w-80 h-72 rounded-xl"
                        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Card Image"
                      />
                      <div className="absolute bottom-0 start-0 end-0 text-center">
                        <div className="p-4 md:p-5">
                          <h3 className="text-2xl font-bold text-white">
                            Card title
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </marquee>

              <marquee>
                <div className="flex w-full gap-12">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="relative bg-white border shadow-sm rounded-2xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                    >
                      <img
                        className="w-80 h-72 rounded-xl"
                        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                        alt="Card Image"
                      />
                      <div className="absolute bottom-0 start-0 end-0 text-center">
                        <div className="p-4 md:p-5">
                          <h3 className="text-2xl font-bold text-white">
                            Card title
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
