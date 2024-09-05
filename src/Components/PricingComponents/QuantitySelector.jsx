import { CircleMinus, CirclePlus } from "lucide-react";

/* eslint-disable react/prop-types */
const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>Select Quantity</div>
      <div className="flex items-center space-x-4">
        {/* Decrease button */}
        <div 
          onClick={handleDecrease} 
          className={`shadow-sm text-lg rounded-lg block py-2 px-10 cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-light ${quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-disabled={quantity <= 1}
        >
          <CircleMinus />
        </div>

        {/* Quantity display/input */}
        <input
          type="number"
          value={quantity}
          readOnly
          className="shadow-sm text-center text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5 bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-light"
        />

        {/* Increase button */}
        <div 
          onClick={handleIncrease}
          className="shadow-sm text-lg rounded-lg block py-2 px-10 cursor-pointer bg-[#18181B] border-none text-white focus:ring-primary-500 shadow-sm-light"
        >
          <CirclePlus />
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
