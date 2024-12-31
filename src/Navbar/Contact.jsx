import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="">
        {/* Section Header with Image Background */}
        <div className="relative bg-cover bg-center h-64 rounded-lg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-center text-white p-12">
            <h1 className="text-5xl font-extrabold">Contact Us</h1>
            <p className="mt-4 text-lg">We would love to hear from you. Reach out to us with any questions or feedback.</p>
          </div>
        </div>

        {/* Flex Container for Map and Form */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12 max-w-5xl mx-auto">
          {/* Map Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-normal text-gray-800 mb-6 text-left">Our Location</h2>
            <div className="w-full" style={{ height: '500px' }}>
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d18479.060909431264!2d38.4955035!3d7.0329231!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1735632948544!5m2!1sen!2set"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
          {/* Contact Form Section */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-normal text-gray-800 mb-6 text-left">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="4"
                />
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  className="inline-block bg-blue-600 text-white px-8 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <a
            href="/contact-form"
            className="inline-block bg-blue-600 text-white px-8 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Go to Full Contact Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
