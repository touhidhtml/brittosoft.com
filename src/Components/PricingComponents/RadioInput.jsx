/* eslint-disable react/prop-types */
import { useState } from "react";

const RadioInput = ({ options, radioinput, setradioinput }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setradioinput(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid  grid-cols-3 gap-4">
        {options.map((option) => (
          <label
            key={option}
            className={`shadow-sm text-lg text-center rounded-lg block py-2 px-4 lg:px-10 cursor-pointer bg-[#18181B] border-none text-[#A2A6AD] focus:ring-primary-500 shadow-sm-light outline-none ${selectedOption === option ? "bg-blue-500 text-[#fff]" : "bg-[#18181B] text-[#A2A6AD] hover:bg-gray-800"}`}
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option && radioinput === option}
              onChange={handleOptionChange}
              className="hidden"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
