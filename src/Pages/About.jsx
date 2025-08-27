import React from "react";
import { FaTshirt, FaStar, FaShippingFast, FaHeart, FaUsers, FaTag, FaPalette, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <FaStar className="h-8 w-8 text-gray-900" />,
      title: "Hand-Picked Quality",
      description:
        "Every piece is curated for its superior fabric, craftsmanship, and enduring style.",
    },
    {
      icon: <FaTshirt className="h-8 w-8 text-gray-900" />,
      title: "Timeless Designs",
      description:
        "We craft pieces that transcend fleeting trends, ensuring your wardrobe remains elegant.",
    },
    {
      icon: <FaShippingFast className="h-8 w-8 text-gray-900" />,
      title: "Swift Delivery",
      description:
        "Enjoy fast and reliable shipping, so your new favorites arrive quickly and in perfect condition.",
    },
    {
      icon: <FaHeart className="h-8 w-8 text-gray-900" />,
      title: "Dedicated Support",
      description:
        "Our team is passionate about providing a seamless and enjoyable shopping experience, always here to help.",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-gray-900" />,
      title: "Community-Focused",
      description:
        "We're more than a brand; we're a community built on a shared love for quality and style.",
    },
  ];
  
  const ourPromise = [
    {
      icon: <FaTag className="h-8 w-8 text-gray-900" />,
      title: "Uncompromising Quality",
      description: "We are committed to sourcing the finest materials to ensure every product is built to last."
    },
    {
      icon: <FaPalette className="h-8 w-8 text-gray-900" />,
      title: "Sustainable Practices",
      description: "Our commitment to sustainability means we strive to minimize our environmental footprint at every step."
    },
    {
      icon: <FaGlobe className="h-8 w-8 text-gray-900" />,
      title: "Global Craftsmanship",
      description: "We partner with skilled artisans worldwide to bring you unique, high-quality pieces."
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full px-4 md:px-16 text-gray-800 pt-20 pb-12 transition-colors duration-300">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-900">
            About EzKari
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Since our founding in 2023, EzKari has been a destination for
            curated fashion. We believe that true style is timeless and should
            be an expression of your authentic self.
          </p>
        </div>

        {/* Our Promise Section */}
        <div className="mt-16 bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {ourPromise.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
