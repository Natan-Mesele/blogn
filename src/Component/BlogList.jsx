import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import Search from './Search';

function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Set the number of blogs per page

  const getRef = async () => {
    try {
      const refResponse = await axios.get('https://nati-blog.prismic.io/api/v2');
      const ref = refResponse.data.refs[0].ref;
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
      setBlogList(blogResponse.data.results);
      setFilteredBlogs(blogResponse.data.results); // Initialize filteredBlogs with all blogs
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError('Failed to fetch blog posts');
      setLoading(false);
    }
  };

  const handleFilterChange = (searchQuery, continent, category) => {
    const filtered = blogList.filter(blog => {
      const title = blog.data.title[0].text.toLowerCase();
      const blogContinent = blog.data.continent?.toLowerCase() || "all";
      const blogCategory = blog.data.category?.toLowerCase() || "all";

      const matchesSearch = title.includes(searchQuery.toLowerCase());
      const matchesContinent = continent === "All" || blogContinent === continent.toLowerCase();
      const matchesCategory = category === "All" || blogCategory === category.toLowerCase();

      return matchesSearch && matchesContinent && matchesCategory;
    });

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Calculate paginated blogs based on the current page and blogsPerPage
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getRef();
  }, []);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl py-10">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
      
      <div className="mb-8">
        <Search onFilterChange={handleFilterChange} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.length > 0 ? (
          currentBlogs.map(blog => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.data.hero_image.url}
              title={blog.data.title[0].text}
              description={blog.data.description}
              date={blog.data.publisher_date}
            />
          ))
        ) : (
          <div className="text-center text-xl">No blogs available</div>
        )}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 border rounded"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BlogList;
