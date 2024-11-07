import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import Search from './Search';

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRef = async () => {
    try {
      const refResponse = await axios.get('https://nati-blog.prismic.io/api/v2');
      const ref = refResponse.data.refs[0].ref;
      console.log(ref, "reference");
      await getBlog(ref);
    } catch (error) {
      console.error('Error fetching reference:', error);
      setError('Failed to fetch reference');
      setLoading(false);
    }
  };

  const getBlog = async (ref) => {
    try {
      const blogResponse = await axios.get(
        `https://nati-blog.cdn.prismic.io/api/v2/documents/search?ref=${ref}&format=json`
      );
      console.log(blogResponse.data.results, "data fetch");
      setBlogList(blogResponse.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError('Failed to fetch blog posts');
      setLoading(false);
    }
  };

  useEffect(() => {
    getRef();
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-xl py-10">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
      {/* Search Component */}
      <div className="mb-8">
        <Search />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogList.length > 0 ? (
          blogList.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                image={blog.data.hero_image.url}  // Pass image URL
                title={blog.data.title[0].text}  // Render title with fallback
                description={blog.data.description}  // Render description with fallback
                date={blog.data.publisher_date}
              />
            );
          })
        ) : (
          <div className="text-center text-xl">No blogs available</div>
        )}
      </div>
    </div>
  );
}

export default BlogList;
