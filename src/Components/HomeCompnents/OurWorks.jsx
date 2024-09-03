import { Loader } from "lucide-react";

const OurWorks = () => {
  const htmlprojects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc:
        "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    // Add more projects as needed
  ];
  return (
    <div>
      <div className="aboutsection flex flex-col items-center bg-black py-20">
        <div className="aboutheading flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center mb-16 border rounded-lg">
          <img
            className="w-[30px] rounded-full"
            src="https://i.postimg.cc/NLqJRSWb/Britto-Soft.jpg"
            alt=""
          />
          <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
            Our Works
          </div>{" "}
          <Loader />
        </div>
        {/* <div className="bg-transparent z-1 ">
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
        </div> */}

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-6 lg:px-20">
            {htmlprojects.map((project, index) => (
              <div
                key={index}
                className="card bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-fit object-cover"
                />
                <div className="card-body p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
