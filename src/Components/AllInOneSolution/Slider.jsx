import { Loader } from "lucide-react";

const cardData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    title: "Card title 1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    title: "Card title 2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    title: "Card title 3",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    title: "Card title 4",
  },
];

const Slider = () => {
  return (
    <div className="aboutsection flex flex-col items-center bg-black py-20">
      <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-16 border rounded-lg">
        <img
          className="w-[30px] rounded-full"
          src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
          alt=""
        />
        <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
          All In One Solutions
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
            experiences, <br className="br" /> and drive <br className="brm" />{" "}
            business growth.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden w-screen lg:w-[90%] m-auto">
          <div className="flex animate-marquee group-hover:paused w-[90%]">
            {cardData.map((card) => (
              <span
                key={card.id}
                className="relative bg-white border shadow-sm rounded-2xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mx-8"
              >
                <img
                  id="sliderimg"
                  className="w-96 h-48 rounded-xl"
                  src={card.image}
                  alt={`Card Image ${card.id}`}
                />
                <div className="absolute bottom-0 start-0 end-0 text-center">
                  <div className="p-4 md:p-5">
                    <h3 className="text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </span>
            ))}
          </div>
          <div className="lg:block hidden">
            <div className="absolute top-0 flex animate-marquee2 group-hover:paused w-[90%] ">
              {cardData.map((card) => (
                <span
                  key={card.id}
                  className="relative bg-white border shadow-sm rounded-2xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mx-8"
                >
                  <img
                    className="w-96 h-48 rounded-xl"
                    src={card.image}
                    alt={`Card Image ${card.id}`}
                  />
                  <div className="absolute bottom-0 start-0 end-0 text-center">
                    <div className="p-4 md:p-5">
                      <h3 className="text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
