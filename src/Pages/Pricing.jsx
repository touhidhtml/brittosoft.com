import { useState } from "react";
import PriceTable from "../Components/PricingComponents/PriceTable";
import QuantitySelector from "../Components/PricingComponents/QuantitySelector";
import RadioInput from "../Components/PricingComponents/RadioInput";
import SelectDate from "../Components/PricingComponents/SelectDate";
import SelectService from "../Components/PricingComponents/SelectService";

const services = [
  {
    name: "Development",
    basePrice: 0,
    imageUrl:
      "https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg",
  },
  {
    name: "Web Design",
    basePrice: 500,
    imageUrl:
      "https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg",
  },
  {
    name: "Web Development",
    basePrice: 1000,
    imageUrl:
      "https://img.freepik.com/free-vector/gradient-responsive-website-design_23-2149565897.jpg",
  },
  {
    name: "WordPress Bug Fixing",
    basePrice: 300,
    imageUrl:
      "https://img.freepik.com/free-vector/abstract-creative-homepage-illustration_23-2149236243.jpg",
  },
  {
    name: "WordPress Development",
    basePrice: 800,
    imageUrl:
      "https://img.freepik.com/free-vector/flat-design-cms-illustration_23-2148825220.jpg",
  },
];

const Pricing = () => {
  const [service, setService] = useState(services[0].name);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [complexity, setComplexity] = useState("Standard");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedService = services.find((s) => s.name === service);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate days
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const turnaroundDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));

    let basePrice = selectedService?.basePrice || 0;

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
      basePrice *= 1.2;
    } else if (turnaroundDays < 30 && turnaroundDays > 7) {
      basePrice *= 0.8;
    } else if (turnaroundDays > 30) {
      basePrice *= 0.6;
    }

    // Calculate final price
    const totalPrice = basePrice * quantity;
    setPrice(totalPrice);
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-8 lg:py-0 lg:my-16 px-4 lg:px-0 mx-auto max-w-screen lg:mt-32">
        <div className="text-center">
          <h6 className="text-center text-white contact-heading">
            Our Pricing
          </h6>
          <p className="mb-8 lg:mb-8 text-center text-gray-400">
            Select your requirements and see <br className="brm" /> our
            <br className="br" /> service pricing to get started
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 grid-cols-1 w-full">
          <div>
            <div className="w-full h-full rounded-lg shadow">
              <div className="flex flex-col justify-between">
                <a href="#">
                  <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {selectedService.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal lg:w-[500px] overflow-hidden text-gray-700 dark:text-gray-400">
                Boost your business with our {selectedService.name} service
                </p>
                <img
                  className=" h-[300px] w-full lg:w-[500px!important] serviceimage"
                  src={selectedService.imageUrl}
                  alt={selectedService.name}
                />
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between bg-black gap-8"
          >
            <div className="input-fields flex flex-col justify-between">
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
              <RadioInput
                complexity={complexity}
                setComplexity={setComplexity}
              />
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
            <button
              type="submit"
              className="w-full bg-[#594FEE] p-3 rounded-lg"
            >
              Calculate
            </button>
          </form>
        </div>
      </section>

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
    </>
  );
};

export default Pricing;
