import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import SectionHeading from "../Comoncomponents/SectionHeading";

const OurWorks = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the JSON file
    axios.get('./data/projects.json')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the project data!", error);
      });
  }, []);

  return (
    <div>
      <div className="aboutsection flex flex-col gap-16 items-center bg-black py-20">
        <SectionHeading title="Our Works" />
        <div>
          <Card data={projects} />
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
