import React from 'react';
import { FaLightbulb, FaHandsHelping, FaShieldAlt, FaUsers } from 'react-icons/fa';

function Vision() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
          Our Vision
        </h1>

        {/* Vision Statement */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-left">
          Our vision is to create a world where innovation and technology seamlessly come together
          to improve the lives of people everywhere. We aim to be leaders in providing solutions that
          push the boundaries of what's possible, shaping a brighter and more connected future.
        </p>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600 text-center">Continuously seeking new ideas and methods to solve problems creatively.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaHandsHelping className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
            <p className="text-gray-600 text-center">Working together across disciplines and borders to achieve excellence.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaShieldAlt className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600 text-center">Acting with transparency and responsibility in everything we do.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaUsers className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centricity</h3>
            <p className="text-gray-600 text-center">Putting the needs of our clients and users first, always.</p>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="space-y-6 mt-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Our Future Goals</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-left">
            We strive to expand our reach globally, bringing innovation to every corner of the world. Our goal is to
            continue fostering a culture of creativity, inclusivity, and sustainability as we work towards making
            a positive impact on society and the environment.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Join Us in Making a Difference
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vision;
