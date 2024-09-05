import { Loader } from "lucide-react";
import Card from "../Card/Card";

const OurWorks = () => {
  const projects = [
    {
      name: "Smart Home Automation",
      description: "Developed a system allowing users to control smart devices via app and voice commands.",
      imageUrl: "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      name: "Reservation System",
      description: "Created an online system for booking tables and managing reservations at restaurants.",
      imageUrl: "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      name: "E-commerce Platform",
      description: "Built a platform for managing products, customers, and orders with an integrated payment gateway.",
      imageUrl: "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      name: "Personal Portfolio Website",
      description: "Developed a responsive website to showcase design and development projects for clients.",
      imageUrl: "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      name: "Project Management Tool",
      description: "Created a tool to track tasks, manage teams, and monitor project progress effectively.",
      imageUrl: "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    },
    {
      name: "Food Delivery Mobile App",
      description: "Developed a cross-platform app for food delivery, featuring real-time tracking and payments.",
      imageUrl: "https://framerusercontent.com/images/LLOWx6bDBZ2xOFWg5KzZOmTMU.jpg",
      link: "#",
    }
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
        <div>
          <Card data={projects}/>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
