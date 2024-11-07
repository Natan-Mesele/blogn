// src/components/BlogCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ title, description, date, id, image }) {
  const [isExpanded, setIsExpanded] = useState(false);  // State to track if description is expanded

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);  // Toggle expanded state
  };

  // Truncate the description if it's not expanded
  const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <img 
        src={image}  // Use the image passed from BlogList
        alt="Blog Image" 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="text-gray-500 text-sm mb-2">{new Date(date).toLocaleDateString()}</div> {/* Format the date */}
      
      {/* Wrap only the title with the Link to make it clickable */}
      <h3 className="text-2xl font-semibold mb-4">
        <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
          {title}
        </Link>
      </h3>
      
      {/* Container for the description */}
      <div
        className={`text-gray-700 mb-4 overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: isExpanded ? '500px' : '50px',  // Adjust maxHeight based on isExpanded state
        }}
      >
        {/* Display the truncated description or the full description based on the state */}
        {isExpanded ? description : truncatedDescription}
      </div>
      
      {/* Toggle "See More" / "See Less" based on description state */}
      <button
        onClick={toggleDescription}
        className="text-blue-500 text-sm hover:underline"
      >
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
}

export default BlogCard;
