// eslint-disable-next-line react/prop-types
const PriceTable = ({ service, turnaroundTime, quantity, price, category }) => {
  return (
    <div>
      <div className="relative overflow-x-auto w-full">
        <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
          <thead className="text-xs uppercase bg-[#18181B] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 lg:px-[43px] py-3">
                Service
              </th>
              <th scope="col" className="px-6 lg:px-[43px] py-3">
                Turnaround Time
              </th>
              <th scope="col" className="px-6 lg:px-[43px] py-3">
                Service Type
              </th>
              <th scope="col" className="px-6 lg:px-[43px] py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 lg:px-[43px] py-3">
                Price
              </th>
              <th scope="col" className="px-6 lg:px-[43px] py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 lg:px-[43px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {service}
              </th>
              <td className="px-6 lg:px-[43px] py-4">{turnaroundTime}</td>
              <td className="px-6 lg:px-[43px] py-4">{category}</td>
              <td className="px-6 lg:px-[43px] py-4">{quantity}</td>
              <td className="px-6 lg:px-[43px] py-4">${price}</td>
              <td className="px-6 lg:px-[43px] py-4">
                <button className="px-4 bg-[#594FEE] py-1 rounded-lg text-white">
                  Proceed
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
