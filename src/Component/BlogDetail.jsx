import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const refResponse = await axios.get('https://nati-blog.prismic.io/api/v2');
        const ref = refResponse.data.refs[0].ref;

        const response = await axios.get(
          `https://nati-blog.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(document.id,"${id}")]]`
        );

        if (response.data.results.length > 0) {
          setBlog(response.data.results[0]);
        } else {
          setError('Blog not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setError('Failed to fetch blog details');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // Run the effect whenever the ID changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  } 

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Main Blog Image at the Top */}
      <img
        src={blog.data?.hero_image?.url || 'https://via.placeholder.com/800x400'}  // Fallback if hero image is missing
        alt="Main Blog"
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">{blog.data?.title?.[0]?.text}</h1>
      <div className="text-gray-500 text-lg mb-6">{blog.data.publisher_date}</div>

      
        <div className="flex items-center mb-8">
          <img
            src={blog.data.publisher_image?.url}
            alt="asd"
            className="w-20 h-20 rounded-full mr-4 object-cover"
          />
          <div>
            <div className="text-xl font-semibold">{blog.data.publisher_name[0]?.text}</div>
            <div className="text-gray-500 text-lg">{blog.data.publisher_position?.[0]?.text}</div>
          </div>
        </div>
    
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{blog.data.description}</p>
    </div>
  );
}

export default BlogDetail;
