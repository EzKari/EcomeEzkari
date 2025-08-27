import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for a previously saved dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

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

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 z-50 fixed border-b border-gray-200 dark:border-gray-700 w-full px-4 md:px-16 shadow-sm">
        <div className="max-w-screen-xl mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/">
                <p className="font-playfair font-bold text-3xl text-gray-900 dark:text-gray-100 hover:tracking-wide transition-all duration-300">
                  EzKari
                </p>
              </Link>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center justify-start gap-8 py-3">
              {["Home", "Shop", "About Us", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side utilities */}
            <div className="flex items-center gap-6 relative">
              {/* Search */}
              <div
                className={`w-48 md:w-64 p-1 px-2 hidden rounded-full gap-2 md:flex text-gray-800 dark:text-gray-200 items-center border border-gray-300 dark:border-gray-600 transition-all duration-300
                ${
                  searchFocused ? "outline-2 outline-gray-500 dark:outline-gray-400 shadow-md" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="focus:outline-0 text-sm bg-transparent w-full placeholder-gray-400"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>

              {/* Dark/Light Mode Toggle */}
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                {darkMode ? <MdOutlineLightMode className="text-xl" /> : <MdOutlineDarkMode className="text-xl" />}
              </button>

              {/* Account / Login Icon */}
              <Link to="/login" className="hidden lg:block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                <FaRegUserCircle className="text-xl" />
              </Link>

              {/* Cart */}
              <Link to={"/notification"}>
                <div className="relative text-gray-700 dark:text-gray-300 cursor-pointer">
                  <CiBellOn className="text-2xl"/>
                  <div className="bg-gray-900 dark:bg-white absolute rounded-full w-5 -top-3 -right-3 text-xs h-5 flex items-center justify-center text-white dark:text-gray-900 font-medium shadow-md">
                    3
                  </div>
                </div>
              </Link>
              <Link to="/login">
                <div className="relative text-gray-700 dark:text-gray-300 cursor-pointer">
                  Sign in
                </div>
              </Link>

              {/* Hamburger */} 
              <button
                className="flex lg:hidden text-gray-800 dark:text-gray-200 text-xl"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <CiMenuFries />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 space-y-2 flex flex-col bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
              {["Home", "Shop", "About Us", "Contact"].map((item, i) => (
                <Link
                  key={i}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition duration-300"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/login"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition duration-300 pt-2 border-t border-gray-200 dark:border-gray-600"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
