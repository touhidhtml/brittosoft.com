/* eslint-disable react/prop-types */

const Card = ({ data }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 px-6 lg:px-40 mx-auto">
        {data.map((service, index) => (
          <div
            key={index}
            value={service}
            className="p-4  border-[1px] border-gray-800 rounded-2xl"
          >
            <div className="flex rounded-2xl h-full p-2 flex-col">
              <div className="flex items-center justify-center mb-4">
                <div className="inline-flex items-center justify-center flex-shrink-0 p-6">
                  <img
                    className="lg:w-[200px] w-[150px]"
                    src={service.imageUrl}
                    alt={service.name}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow">
                <p className="leading-relaxed mb-4 text-[26px] bg-gradient-to-b from-white to-gray-500 text-transparent font-bold bg-clip-text">
                  {service.name}
                </p>
                <p className="leading-relaxed text-white text-[15px] text-center">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
