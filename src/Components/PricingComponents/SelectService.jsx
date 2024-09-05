/* eslint-disable react/prop-types */
const SelectService = ({ value, onChange }) => {
  return (
    <div>
      <div className="w-full">
        <select
          name="service"
          id="service"
          className="shadow-sm text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5 bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-light"
          value={value} // Controlled value
          onChange={onChange} // Handle change
        >
          <option value="">Choose a service</option>
          <option value="Web Design">Web Design</option>
          <option value="Web Development">Web Development</option>
          <option value="WordPress Bug Fixing">WordPress Bug Fixing</option>
          <option value="WordPress Development">WordPress Development</option>
        </select>
      </div>
    </div>
  );
};

export default SelectService;
