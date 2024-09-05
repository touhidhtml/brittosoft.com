/* eslint-disable react/prop-types */
const DateRangeSelector = ({ fromDate, toDate, setFromDate, setToDate }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="fromdate text-[#A2A6AD]">From</label>
          <input
            type="date"
            name="fromdate"
            id="fromdate"
            value={fromDate} // Controlled value
            onChange={(e) => setFromDate(e.target.value)} // Handle change
            className="shadow-sm text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5 bg-[#18181B] border-none text-[#A2A6AD] focus:ring-primary-500 shadow-sm-light"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="todate text-[#A2A6AD]">To</label>
          <input
            type="date"
            name="todate"
            id="todate"
            value={toDate} // Controlled value
            onChange={(e) => setToDate(e.target.value)} // Handle change
            className="shadow-sm text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5 bg-[#18181B] border-none text-[#A2A6AD] focus:ring-primary-500 shadow-sm-light"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangeSelector;
