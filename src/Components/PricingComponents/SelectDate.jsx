const SelectDate = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        <div>
          <input
            type="date"
            id="name"
            className="shadow-sm  text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5  bg-[#18181B] border-none text-white focus:ring-primary-500  shadow-sm-light"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="date"
            id="email"
            className="shadow-sm  text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5  bg-[#18181B] border-none text-white focus:ring-primary-500   shadow-sm-light"
            placeholder="Email"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
