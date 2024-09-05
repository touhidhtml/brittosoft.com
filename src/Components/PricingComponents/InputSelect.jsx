/* eslint-disable react/prop-types */
const InputSelect = ({ value, onChange, services, placeholder }) => {
  return (
    <div>
      <div className="w-full">
        <select required
          name=""
          id="service"
          className="shadow-sm text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5
           bg-[#18181B] border-none text-[#A2A6AD] focus:ring-primary-500 shadow-sm-light"
          value={value}
          onChange={onChange} 
        >
          <option disabled value="Development">
            {placeholder}
          </option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputSelect;
