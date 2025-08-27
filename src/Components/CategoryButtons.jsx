import React from "react";

const CategoryButtons = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    "All EzKari",
    "Men",
    "Women",
    "Kids",
    "Accessories",
    "Jewelry",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 mt-6">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ease-in-out border border-transparent 
              ${
                isActive
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 border-gray-300"
              }
              hover:bg-gray-800 hover:text-white transform hover:scale-105`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryButtons;