import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-screen">
        {/* Image */}
        <img 
          src="https://www.internetsociety.org/wp-content/uploads/2023/11/kids-Nepal-school-min.jpg" 
          alt="Hero Image" 
          className="w-full h-full object-cover"
        />

        {/* Light Overlay Effect for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div> {/* Gradient overlay */}

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-6 md:px-12 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-wide mb-6 ml-6 max-w-lg p-6">
                We believe in a world where the Internet means opportunity. 
                We care about its future.
            </h1>

            {/* Button with same left margin */}
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors mb-6 ml-6">
                Learn more about us
            </button>
        </div>
    </div>
  );
}

export default Hero;
