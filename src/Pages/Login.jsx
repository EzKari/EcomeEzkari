import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Login = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for a previously saved dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4 py-12">
      {/* Login Card */}
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 sm:p-8 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg shadow-lg border border-gray-200 dark:border-gray-700">
        
        {/* Back to Home Link */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-sm text-gray-600 dark:text-gray-400 mb-6 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition"
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
          Welcome Back
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6 text-sm sm:text-base">
          Sign in to your account to continue
        </p>

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
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base">
          Sign In
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
          <p className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Forgot your password?
          </p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-gray-900 dark:text-white cursor-pointer hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
