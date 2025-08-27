import React, { useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

// Data for fashion products
const productsData = [
  {
    id: 1,
    name: "Classic Trench Coat",
    category: "Outerwear",
    price: 499,
    oldPrice: 650,
    discount: 23,
    rating: 4.8,
    reviews: 80,
    badge: "Featured",
    image: "https://images.pexels.com/photos/31529647/pexels-photo-31529647.jpeg?_gl=1*lbigcg*_ga*MTk3MDkwNjYxOC4xNzUxMzcwMDAw*_ga_8JE65Q40S6*czE3NTYyODYwNDEkbzEyJGcxJHQxNzU2Mjg2MjcyJGozOSRsMCRoMA..",
  },
  {
    id: 2,
    name: "Pure Silk Scarf",
    category: "Accessories",
    price: 79,
    oldPrice: 100,
    discount: 21,
    rating: 4.9,
    reviews: 120,
    badge: "New Arrival",
    image: "https://img.drz.lazcdn.com/static/np/p/eed751e101ae68ec2d9ba34bf72d9c9c.jpg_400x400q75.avif",
  },
  {
    id: 3,
    name: "Handcrafted Leather Bag",
    category: "Bags",
    price: 349,
    oldPrice: 420,
    discount: 17,
    rating: 4.7,
    reviews: 95,
    badge: "Limited Edition",
    image: "https://img.drz.lazcdn.com/static/np/p/70b42d880b69833ac92bcd5e3a958af0.jpg_400x400q75.avif",
  },
  {
    id: 4,
    name: "Elegant Wool Sweater",
    category: "Knitwear",
    price: 159,
    oldPrice: 199,
    discount: 20,
    rating: 4.6,
    reviews: 65,
    badge: "Bestseller",
    image: "https://img.drz.lazcdn.com/static/np/p/3fb6e24bbf63e823f0aa5a13337026d2.jpg_400x400q75.avif",
  },
  {
    id: 5,
    name: "Vintage Gold Locket",
    category: "Jewellery",
    price: 189,
    oldPrice: 250,
    discount: 24,
    rating: 5.0,
    reviews: 45,
    badge: "Exclusive",
    image: "https://img.drz.lazcdn.com/static/np/p/975599f5614baa2a896192518e82fed1.png_400x400q75.avif",
  },
  {
    id: 6,
    name: "Tailored Linen Trousers",
    category: "Bottoms",
    price: 120,
    oldPrice: 150,
    discount: 20,
    rating: 4.3,
    reviews: 110,
    badge: "Featured",
    image: "https://img.drz.lazcdn.com/static/np/p/146003e0fbe625fbaf776e28abc497e3.jpg_400x400q75.avif",
  },
  {
    id: 7,
    name: "Silk Button-Up Shirt",
    category: "Tops",
    price: 140,
    oldPrice: 180,
    discount: 22,
    rating: 4.5,
    reviews: 78,
    badge: "New Arrival",
    image: "https://img.drz.lazcdn.com/static/np/p/7ee7fa50fa971fa35b328c4e5aa0c569.jpg_400x400q75.avif",
  },
  {
    id: 8,
    name: "Sleek Leather Loafers",
    category: "Footwear",
    price: 210,
    oldPrice: 280,
    discount: 25,
    rating: 4.8,
    reviews: 88,
    badge: "Bestseller",
    image: "https://img.drz.lazcdn.com/static/np/p/cbe95b747f908d990b0a09f3c3996f9d.jpg_400x400q75.avif",
  },
  {
    id: 9,
    name: "Minimalist Silver Earrings",
    category: "Jewellery",
    price: 65,
    oldPrice: 85,
    discount: 24,
    rating: 4.9,
    reviews: 150,
    badge: "Featured",
    image: "https://img.drz.lazcdn.com/static/np/p/e7445c770db8c35b538d28c723183503.jpg_400x400q75.avif",
  },
];

// Helper component for category buttons to keep the main component clean
const CategoryButtons = ({ activeCategory, setActiveCategory }) => {
  const categories = ["All Products", "Outerwear", "Accessories", "Bags", "Knitwear", "Jewellery", "Bottoms", "Tops", "Footwear"];
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-12 mb-8 md:mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
            ${activeCategory === category
              ? "bg-gray-900 text-white shadow-lg"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
            }`}https
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [visibleProducts, setVisibleProducts] = useState(6);

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "All Products"
      ? productsData
      : productsData.filter((item) => item.category === activeCategory);

  // Show more products when clicking Load More
  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  return (
    <div className="bg-gray-50 py-20 md:py-32 min-h-screen px-4 md:px-16 font-sans">
      {/* Headings */}
      <div className="w-full flex items-center justify-center flex-col text-center">
        <h1 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 mb-5">
          Our Curated Collection
        </h1>
        <p className="text-gray-600 text-xl font-light max-w-2xl">
          Discover a selection of timeless pieces crafted with the finest materials and an eye for enduring style.
        </p>
      </div>

      {/* Category Buttons */}
      <CategoryButtons
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Badge & Discount */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-md">
                    {product.badge}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <div className="absolute inset-0 flex justify-center items-end p-4 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-white text-gray-800 font-semibold py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className={i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-gray-500 text-sm ml-1">
                  ({product.reviews})
                </span>
              </div>

              {/* Name */}
              <h2 className="text-lg font-playfair font-semibold text-gray-900 mt-2">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-900 font-bold text-xl">
                  ${product.price}
                </span>
                <span className="text-gray-500 line-through text-md">
                  ${product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
