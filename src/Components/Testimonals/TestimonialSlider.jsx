import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios from 'axios';

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    // Fetch testimonials data from the JSON file
    axios.get('./data/testimonials.json')
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the testimonials data!", error);
      });
  }, []);

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection("");
    }, 200);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Display one testimonial at a time for small screens, and two for larger screens
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + (window.innerWidth >= 768 ? 2 : 1)
  );

  return (
    <div className="relative py-10">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-transform duration-300 transform ${
            direction === "right" ? "translate-x-full opacity-0" :
            direction === "left" ? "-translate-x-full opacity-0" :
            "translate-x-0 opacity-100"
          }`}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-black/30 border border-gray-800 backdrop-blur-sm p-6 shadow-xl shadow-slate-900/10"
            >
              <blockquote className="relative">
                <p className="text-base tracking-tight text-white">
                  {testimonial.description}
                </p>
              </blockquote>
              <div className="relative mt-6 flex items-center border-t border-slate-100 pt-6">
                <div className="flex-grow">
                  <div className="text-base font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img
                    alt={testimonial.name}
                    className="h-14 w-14 object-cover"
                    src={testimonial.imageUrl}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={prevTestimonial}
            className="hover:bg-gray-400 text-white py-2 px-4 rounded mx-2"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="hover:bg-gray-400 text-white py-2 px-4 rounded mx-2"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
