import PriceTable from "../Components/PricingComponents/PriceTable";
import QuantitySelector from "../Components/PricingComponents/QuantitySelector";
import RadioInput from "../Components/PricingComponents/RadioInput";
import SelectDate from "../Components/PricingComponents/SelectDate";
import SelectService from "../Components/PricingComponents/SelectService";

const Pricing = () => {
  return (
    <section className="py-8 lg:py-0 lg:my-16 px-4 lg:px-0 mx-auto max-w-screen-md">
      <div>
        <form action="#" className="space-y-3 bg-black">
          <SelectService />
          <SelectDate />
          <RadioInput />
          <QuantitySelector />
          <button type="submit" className="w-full bg-[#594FEE] p-3 rounded-lg">
            Calculate
          </button>
        </form>
      </div>
      <div className="mt-8">
        <PriceTable/>
      </div>
    </section>
  );
};

export default Pricing;
