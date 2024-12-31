import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-[70vh]">
        {/* Image */}
        <img 
          src="https://images.unsplash.com/photo-1728963606465-590b0c43dc5a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Hero Image" 
          className="w-full h-full object-cover"
        />

        {/* Light Overlay Effect for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8 md:px-16 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide mb-4 max-w-3xl text-shadow-md animate__animated animate__fadeIn">
                Explore the world of stories and ideas. <span className="block md:inline">Discover, share, and connect with the best content.</span>
            </h1>

            <p className="text-xl md:text-2xl my-8 text-opacity-90 mr-80">
                ZBlog is where creativity meets conversation. Join us to explore a diverse range of articles, 
                written by passionate contributors, and stay updated with the latest trends.
            </p>

            {/* Button with animation and shadow */}
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all transform hover:scale-105">
                Explore the Blog
            </button>
        </div>
    </div>
  );
}

export default Hero;
