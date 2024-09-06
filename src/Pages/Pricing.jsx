/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import PriceTable from "../Components/PricingComponents/PriceTable";
import QuantitySelector from "../Components/PricingComponents/QuantitySelector";
import RadioInput from "../Components/PricingComponents/RadioInput";
import InputSelect from "../Components/PricingComponents/InputSelect";

const Pricing = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState("");
  const [category, setCategory] = useState("");
  const [turnaroundDays, setTurnaroundDays] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  /* Get data form json file using axios--------- */
  useEffect(() => {
    axios
      .get("./data/services.json")
      .then((response) => {
        setServices(response.data);
        setService(response.data[0].name);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const selectedService = services.find((s) => s.name === service);
  const selectedCategory = selectedService?.categories.find(
    (c) => c.name === category
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let basePrice = selectedCategory?.basePrice || 0;
    // Adjust price based on turnaround time
    if (turnaroundDays == "1-3") {
      basePrice *= 1.2;
    } else if (turnaroundDays == "4-7") {
      basePrice *= 0.8;
    } else if (turnaroundDays == "8-30") {
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
        <div className="text-center pb-8">
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
                <div className="flex flex-col items-center justify-between">
                  <div>
                    <a href="#">
                      <h5 className="text-2xl font-bold tracking-tight text-[#A2A6AD]">
                        {selectedService.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal lg:w-[500px] overflow-hidden dark:text-gray-400">
                      {selectedService.description}
                    </p>
                  </div>
                  <div className="border-[1px] border-gray-900 w-full flex justify-center items-center p-4 rounded-lg">
                    <img
                      className="h-[300px] w-auto lg:w-[300px!important] serviceimage "
                      src={selectedService.imageUrl}
                      alt={selectedService.name}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-end bg-black gap-8"
          >
            <div className="input-fields gp-8 flex flex-col justify-between">
              {/* Service Selection */}
              <InputSelect
                value={service}
                placeholder="Select Service"
                onChange={(e) => {
                  setService(e.target.value);
                  setCategory("");
                }}
                services={services.map((s) => s.name)}
              />

              {/* Service catagory selection */}
              {selectedService && selectedService.categories && (
                <div className="my-8">
                  <InputSelect
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    services={selectedService.categories.map((c) => c.name)}
                    placeholder="Select Category"
                  />
                </div>
              )}

              {/* Input Date */}
              <div className="mb-8">
                <RadioInput
                  options={["1-3", "4-7", "8-30"]}
                  radioinput={turnaroundDays}
                  setradioinput={setTurnaroundDays}
                />
              </div>
              {/* Select Quantity of website */}
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

      <div className="mt-8 w-screen md:w-fit lg:w-fit mb-16">
        {submitted && (
          <PriceTable
            service={service}
            category={category}
            turnaroundTime={`${turnaroundDays} days`}
            quantity={quantity}
            price={price}
          />
        )}
      </div>
    </>
  );
};

export default Pricing;
