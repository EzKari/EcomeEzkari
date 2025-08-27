import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-30 pb-16">
      <main className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Have questions or need support? Get in touch with us through the form or our contact details below.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Visit Us</h3>
                <p className="text-gray-600">123 Fashion Street</p>
                <p className="text-gray-600">Kathmandu, Bagmati, 44600</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white">
                <FaPhone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+977 9861804767</p>
                <p className="text-gray-600">Sun - Fri, 10AM - 5PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">support@ezkari.com</p>
                <p className="text-gray-600">We’ll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white">
                <FaClock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Business Hours</h3>
                <p className="text-gray-600">Sunday - Friday: 10AM - 5PM</p>
                <p className="text-gray-600">Saturday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows="5"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
