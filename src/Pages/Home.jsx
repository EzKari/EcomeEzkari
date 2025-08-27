import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineStyle } from "react-icons/md";

// Counter component for animation
const Counter = ({ to, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(to);
    if (start === end) return;
    let incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end); // Ensure the final value is exact
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  // Find and append the non-numeric part of the string
  const nonNumericPart = typeof to === "string" ? to.replace(/[\d.]/g, "") : "";
  
  return (
    <span>
      {count}
      {nonNumericPart}
    </span>
  );
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger the fade-in animation after the component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-50 text-gray-800 px-4 md:px-16 pt-28 md:pt-36 pb-12 overflow-hidden">
        {/* Left Content with fade-in animation */}
        <div 
          className={`w-full md:w-1/2 space-y-6 z-10 transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 py-2 rounded-full shadow-lg">
            <MdOutlineStyle className="text-gray-600" />
            <span className="text-gray-600 font-medium">
              Timeless Collection
            </span>
          </div>
          <div className="w-full md:pr-32">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 leading-tight mt-4">
              Discover Your Timeless Style
            </h1>
          </div>
          <p className="text-xl md:text-xl text-gray-600 max-w-lg">
            Curated pieces that combine classic elegance with modern
            sophistication, designed to be cherished for years.
          </p>

          {/* CTA Buttons */}
          <div className="block md:flex gap-4 mt-8">
            <a
              href="/products"
              className="bg-gray-900 text-white w-full md:w-auto px-8 py-3 justify-center rounded-xl md:rounded-full mb-4 md:mb-0 font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
            >
              Explore The Collection
              <FaArrowRightLong />
            </a>
            <a href="/login" className="border border-gray-300 bg-white w-full md:w-auto text-gray-800 px-8 py-3 rounded-xl md:rounded-full font-semibold hover:bg-gray-100 transition">
              Sign in
            </a>
          </div>

          {/* Animated Stats Section */}
          <div className="flex justify-center md:justify-start gap-10 mt-12">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gray-900">
                <Counter to={10} duration={1000} />
                K+
              </div>
              <div className="text-gray-600 text-lg mt-1">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gray-900">
                <Counter to={4.9} duration={1200} />
              </div>
              <div className="text-gray-600 text-lg mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-gray-900">
                <Counter to={500} duration={1200} />+
              </div>
              <div className="text-gray-600 text-lg mt-1">Quality Pieces</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full md:w-[700px] h-[250px] md:h-[500px] flex items-center justify-center mt-12 md:mt-0 z-10">
          {/* Decorative background with a blur effect */}
          <div className="absolute inset-0 bg-gray-200 rounded-3xl blur-2xl "></div>
          {/* Main image */}
          <img
            src="https://images.pexels.com/photos/29903650/pexels-photo-29903650.jpeg?_gl=1*1o7u4j3*_ga*MTk3MDkwNjYxOC4xNzUxMzcwMDAw*_ga_8JE65Q40S6*czE3NTYyODYwNDEkbzEyJGcxJHQxNzU2Mjg2MTk4JGo0NSRsMCRoMA.."
            alt="EzKari Fashion Collection"
            className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transition duration-300 animate-float"
          />
        </div>
      </div>

      {/* Placeholder for Product section, to be developed later */}
      {/* <Product /> */}
    </div>
  );
};

export default App;
