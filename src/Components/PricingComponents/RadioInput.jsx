/* eslint-disable react/prop-types */
import { useState } from "react";

const RadioInput = ({ complexity, setComplexity }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setComplexity(event.target.value)
  };

  return (
    <div className="flex flex-col gap-2">
      <div>Select Complexity</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Option 1 */}

        <label
          className={`shadow-sm  text-lg text-center rounded-lg  block  py-2 px-10  cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-
            light outline-none ${selectedOption === "Basic" ? "bg-blue-500 text-white" : "bg-[#18181B] text-white hover:bg-gray-800"}`}
        >
          <input
            type="radio"
            value="Basic"
            checked={selectedOption === "Basic" && complexity === "Standard"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Basic
        </label>

        {/* Option 2 */}
        <label
          className={`shadow-sm  text-lg text-center rounded-lg  block  py-2 px-10  cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-
            light outline-none ${selectedOption === "Standard" ? "bg-blue-500 text-white" : "bg-[#18181B] text-white hover:bg-gray-800"}`}
        >
          <input
            type="radio"
            value="Standard"
            checked={selectedOption === "Standard" && complexity === "Standard"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Standard
        </label>

        {/* Option 3 */}
        <label className={`shadow-sm  text-lg text-center rounded-lg  block  py-2 px-10  cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-
            light outline-none ${selectedOption === "Premium" ? "bg-blue-500 text-white" : "bg-[#18181B] text-white hover:bg-gray-800"}`}
        >
          <input
            type="radio"
            value="Premium"
            checked={selectedOption === "Premium" && complexity === "Premium"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Premium
        </label>
      </div>
    </div>
  );
};

export default RadioInput;






