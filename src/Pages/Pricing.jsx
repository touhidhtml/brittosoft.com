import { useState } from "react";
import PriceTable from "../Components/PricingComponents/PriceTable";
import QuantitySelector from "../Components/PricingComponents/QuantitySelector";
import RadioInput from "../Components/PricingComponents/RadioInput";
import SelectDate from "../Components/PricingComponents/SelectDate";
import SelectService from "../Components/PricingComponents/SelectService";

const Pricing = () => {
  const [service, setService] = useState("Web Design");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [complexity, setComplexity] = useState("Standard");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate turnaround time in days
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const turnaroundDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));

    let basePrice = 0;

    // Determine base price based on service
    switch (service) {
      case "Web Design":
        basePrice = 500;
        break;
      case "Web Development":
        basePrice = 1000;
        break;
      case "WordPress Bug Fixing":
        basePrice = 300;
        break;
      case "WordPress Development":
        basePrice = 800;
        break;
      default:
        basePrice = 0;
    }

    // Adjust base price based on complexity
    if (complexity === "Basic") {
      basePrice *= 1;
    } else if (complexity === "Standard") {
      basePrice *= 2;
    } else if (complexity === "Premium") {
      basePrice *= 3;
    }

    // Adjust price based on turnaround time
    if (turnaroundDays <= 7) {
      basePrice *= 1.2; // Increase price by 20% for shorter turnaround
    } else if (turnaroundDays < 30 && turnaroundDays > 7) {
      basePrice *= 0.8; // Decrease price by 20% for longer turnaround
    } else if (turnaroundDays > 30) {
      basePrice *= 0.6; // Decrease price by 40% for longer turnaround
    }

    // Calculate final price
    const totalPrice = basePrice * quantity;
    setPrice(totalPrice);
    setSubmitted(true);
  };
  console.log(submitted);

  return (
    <section className="py-8 lg:py-0 lg:my-16 px-4 lg:px-0 mx-auto max-w-screen-md">
      <div>
        <h6 className="text-center text-white contact-heading">Our Pricing</h6>
        <p className="mb-8 lg:mb-8 text-center text-gray-400">
          Select your requirements and see <br className="brm" /> our{" "}
          <br className="br" /> service pricing to get started
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-3 bg-black">
          <div className="input-fields">
            <SelectService
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <SelectDate
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
            />
            <RadioInput complexity={complexity} setComplexity={setComplexity} />
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
          <button type="submit" className="w-full bg-[#594FEE] p-3 rounded-lg">
            Calculate
          </button>
        </form>
      </div>

      {/* Show Price Table after form submission */}
      <div className="mt-8">
        {submitted && (
          <PriceTable
            service={service}
            turnaroundTime={`${
              Math.abs(new Date(toDate) - new Date(fromDate)) /
              (1000 * 60 * 60 * 24)
            } days`}
            complexity={complexity}
            quantity={quantity}
            price={price}
          />
        )}
      </div>
    </section>
  );
};

export default Pricing;
