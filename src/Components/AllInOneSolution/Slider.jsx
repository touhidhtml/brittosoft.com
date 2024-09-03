import { useState, useEffect } from "react";

const Slider = () => {
  // Array of image URLs
  const slides = [
    "https://i0.wp.com/wordpressfoundation.org/content/uploads/2022/02/WordPress-logotype-wmark.png",
    "https://logos-world.net/wp-content/uploads/2023/08/React-Logo.png",
    "https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
  ];

  const [index, setIndex] = useState(0);

  // Increment the index every 2 seconds, reset if it exceeds the slide length
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="slider overflow-hidden w-full">
      <div className="slide-track flex animate-scroll">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`slide w-fit h-fit flex-shrink-0 ${
              index === slideIndex ? "active" : ""
            }`}
          >
            <img className="w-20" src={slide} alt={`Slide ${slideIndex + 1}`} />
          </div>
        ))}
        {/* Duplicate slides for infinite scrolling */}
        {slides.map((slide, slideIndex) => (
          <div key={`duplicate-${slideIndex}`} className="slide w-64 h-24 flex-shrink-0">
            <img className="w-20" src={slide} alt={`Slide ${slideIndex + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
