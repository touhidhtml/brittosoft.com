import { useState } from "react";

const RadioInput = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        {/* Option 1 */}
        <label
          className={`shadow-sm  text-lg text-center rounded-lg  block  py-2 px-10  bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-
            light outline-none ${selectedOption === "option1" ? "bg-blue-500 text-white" : "bg-[#18181B] text-white"}`}
        >
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Basic
        </label>

        {/* Option 2 */}
        <label
          className={`shadow-sm  text-lg text-center rounded-lg  block  py-2 px-10  bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-
            light outline-none ${selectedOption === "option2" ? "bg-blue-500 text-white" : "bg-[#18181B] text-white"}`}
        >
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="hidden"
          />
          Standard
        </label>

        {/* Option 3 */}
        <label className={`shadow-sm  text-lg text-center rounded-lg  block  py-2 px-10  bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-
            light outline-none ${selectedOption === "option3" ? "bg-blue-500 text-white" : "bg-[#18181B] text-white"}`}
        >
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
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
