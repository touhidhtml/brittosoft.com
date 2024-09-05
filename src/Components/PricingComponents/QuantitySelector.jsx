import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Decrease div */}
      <div onClick={handleDecrease}>
        <div className="shadow-sm  text-lg rounded-lg  block  py-2 px-10 cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500   shadow-sm-light">
          -
        </div>
      </div>

      {/* Quantity display/input */}
      <input
        type="number"
        value={quantity}
        readOnly
        className="shadow-sm text-center  text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5  bg-[#18181B] border-none text-white focus:ring-primary-500   shadow-sm-light"
      />

      {/* Increase div */}
      <div onClick={handleIncrease}>
        <div className="shadow-sm  text-lg rounded-lg block py-2 px-10 cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500   shadow-sm-light">
          +
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
