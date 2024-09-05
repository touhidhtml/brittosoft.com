import { useEffect, useState } from "react";
import axios from "axios";
import PriceTable from "../Components/PricingComponents/PriceTable";
import QuantitySelector from "../Components/PricingComponents/QuantitySelector";
import RadioInput from "../Components/PricingComponents/RadioInput";
// import DateRangeSelector from "../Components/PricingComponents/DateRangeSelector";
import InputSelect from "../Components/PricingComponents/InputSelect";

const Pricing = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState("");
  const [category, setCategory] = useState("");
  const [turnaroundDays, setTurnaroundDays] = useState("");
  // const [fromDate, setFromDate] = useState("");
  // const [toDate, setToDate] = useState("");
  const [radioinput, setradioinput] = useState("Standard");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get("./services.json")
      .then((response) => {
        setServices(response.data);
        setService(response.data[0].name); // Set default service on load
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const selectedService = services.find((s) => s.name === service);
  const selectedCategory = selectedService?.categories.find(
    (c) => c.name === category
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate days
    // const from = new Date(fromDate);
    // const to = new Date(toDate);
    // const turnaroundDays = Math.ceil((to - from) / (1000 * 60 * 60 * 24));

    let basePrice = selectedCategory?.basePrice || 0;

    // Adjust base price based on radioinput
    if (radioinput === "Basic") {
      basePrice *= 1;
    } else if (radioinput === "Standard") {
      basePrice *= 2;
    } else if (radioinput === "Premium") {
      basePrice *= 3;
    }

    // Adjust price based on turnaround time
    if (turnaroundDays <= 3) {
      basePrice *= 1.2;
    } else if (turnaroundDays < 7 && turnaroundDays > 3) {
      basePrice *= 0.8;
    } else if (turnaroundDays < 30 && turnaroundDays > 7) {
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
            Select your requirements and see <br className="brm" /> our{" "}
            <br className="br" /> service pricing to get started
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 grid-cols-1 w-full">
          <div>
            {selectedService && (
              <div className="w-full h-full rounded-lg shadow">
                <div className="flex flex-col justify-between">
                  <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {selectedService.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal lg:w-[500px] overflow-hidden text-gray-700 dark:text-gray-400">
                    Boost your business with our {selectedService.name} service
                  </p>
                  <img
                    className="h-[300px] w-full lg:w-[500px!important] serviceimage"
                    src={selectedService.imageUrl}
                    alt={selectedService.name}
                  />
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between bg-black gap-8"
          >
            <div className="input-fields flex flex-col justify-between">
              {/* Service Selection */}
              <InputSelect
                value={service}
                placeholder="Select Service"
                onChange={(e) => {
                  setService(e.target.value);
                  setCategory(""); // Reset category when a new service is selected
                }}
                services={services.map((s) => s.name)} // Pass service names as options
              />

              {/* Conditionally render category selector after service is selected */}
              {selectedService && selectedService.categories && (
                <div className="mt-8">
                  <InputSelect
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    services={selectedService.categories.map((c) => c.name)} // Pass category names as options
                    placeholder="Select Category" // Optional placeholder text
                  />
                </div>
              )}

              {/* <DateRangeSelector
                fromDate={fromDate}
                toDate={toDate}
                setFromDate={setFromDate}
                setToDate={setToDate}
              /> */}
              {/* <RadioInput
                options={["Basic", "Standard", "Premium"]}
                radioinput={turnaroundDays}
                setradioinput={setTurnaroundDays}
              /> */}
              <RadioInput
                options={["1-3", "4-7", "8-30"]}
                radioinput={radioinput}
                setradioinput={setradioinput}
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
            category={category}
            turnaroundTime={`${
              Math.abs(new Date(toDate) - new Date(fromDate)) /
              (1000 * 60 * 60 * 24)
            } days`}
            radioinput={radioinput}
            quantity={quantity}
            price={price}
          />
        )}
      </div>
    </>
  );
};

export default Pricing;
