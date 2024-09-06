/* eslint-disable react/prop-types */
import { Loader } from "lucide-react";

const SectionHeading = ({title}) => {
  return (

      <div className="flex gap-2 bg-[#1F1F1F] py-2 px-10 justify-center items-center border rounded-lg">
        <img
          className="w-[30px] rounded-full"
          src="./all-img/BrittoSoft.png"
          alt={title}
        />
        <div className="bg-gradient-to-b lg:text-2xl from-white to-gray-500 text-transparent font-bold bg-clip-text">
         {title}
        </div>
        <Loader />
      </div>
  );
};

export default SectionHeading;
