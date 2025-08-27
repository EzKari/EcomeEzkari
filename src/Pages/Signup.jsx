import React, { useState, useEffect } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Captcha = ({ onChange, darkMode }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleClick = () => {
    setIsVerified(true);
    onChange(true);
  };

  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300 cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} onClick={handleClick}>
      <input
        type="checkbox"
        className="w-4 h-4 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded"
        checked={isVerified}
        readOnly
      />
      <span className="text-sm text-gray-700 dark:text-gray-300">
        I'm not a robot
      </span>
    </div>
  );
};

const Signup = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for a previously saved dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    // Apply the 'dark' class to the body to enable Tailwind's dark mode
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // Save the preference to local storage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // !!value converts the value to a boolean
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 py-12">
      {/* Sign Up Card */}
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow-lg border border-gray-200 dark:border-gray-700">
        
        {/* Back to Home Link */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          ← Back to Home
        </Link>
        
        {/* Dark/Light Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
            {darkMode ? <MdOutlineLightMode className="text-xl" /> : <MdOutlineDarkMode className="text-xl" />}
          </button>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-xl sm:text-2xl font-playfair font-bold mb-2 text-center text-gray-900 dark:text-gray-100">
          Create Your Account
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6 text-sm sm:text-base">
          Sign up to get started with EzKari
        </p>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <input type="checkbox" className="w-4 h-4 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded focus:ring-gray-400 dark:focus:ring-gray-500" />
          <span className="text-gray-600 dark:text-gray-400">
            I agree to the{" "}
            <span className="text-gray-900 dark:text-white cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-gray-900 dark:text-white cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </span>
        </div>

        {/* Captcha */}
        <div className="mb-6 text-black">
          <Captcha onChange={handleCaptchaChange} darkMode={darkMode} />
        </div>

        {/* Sign Up Button */}
        <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base ${captchaVerified ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200' : 'bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed'}`} disabled={!captchaVerified}>
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            OR CONTINUE WITH
          </span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="flex-1 bg-gray-100 dark:bg-gray-700 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-sm sm:text-base flex items-center justify-center gap-4 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
            <BsGoogle />
            Google
          </button>
          <button className="flex-1 bg-gray-100 dark:bg-gray-700 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-sm sm:text-base flex items-center justify-center gap-4 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
            <BsFacebook />
            Facebook
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-900 dark:text-white cursor-pointer hover:underline font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
