import React from 'react';
import { FaLightbulb, FaHandsHelping, FaTrophy, FaShieldAlt } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
          About Us
        </h1>

        {/* Section Intro with Image */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a team of passionate individuals committed to delivering innovative solutions. 
              Our mission is to bring creativity, technology, and user-centric designs to every project 
              we undertake. We believe in the power of collaboration and continuous improvement, ensuring 
              that every product we create adds value and meets the highest standards of quality.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white py-10 px-6 rounded-lg shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace creativity and constantly challenge ourselves to find new and better solutions.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandsHelping className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">We work together, fostering an environment of trust, respect, and open communication.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTrophy className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">We set high standards and strive to exceed expectations in every project we take on.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We are committed to honesty, transparency, and maintaining the highest ethical standards.</p>
            </div>
          </div>
        </div>

        {/* Section Content */}
        <div className="text-left mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Whether it's developing cutting-edge software or designing intuitive user interfaces, we approach each challenge 
            with dedication and enthusiasm. Our diverse team brings a wealth of experience from various fields, which allows 
            us to provide comprehensive solutions tailored to our client's needs.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At the core of our business is a commitment to fostering long-term relationships with our clients, partners, and 
            community. We take pride in delivering exceptional results that exceed expectations and make a meaningful impact 
            on the world.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
