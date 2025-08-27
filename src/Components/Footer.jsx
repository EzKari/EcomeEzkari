import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-playfair font-bold text-gray-900">
            EzKari
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Timeless fashion for the modern wardrobe. Effortlessly chic,
            curated with passion.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <FaFacebook className="text-xl hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Men's
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Women's
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              New Arrivals
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Sale
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Order Status
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              About EzKari
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Our Story
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Press
            </li>
            <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EzKari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;