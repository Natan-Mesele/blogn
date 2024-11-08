// Search.js
import React, { useState } from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";

const Search = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [continentDropdownOpen, setContinentDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    onFilterChange(e.target.value, selectedContinent, selectedCategory);
  };

  const toggleContinentDropdown = () => setContinentDropdownOpen(!continentDropdownOpen);
  const toggleCategoryDropdown = () => setCategoryDropdownOpen(!categoryDropdownOpen);

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    setContinentDropdownOpen(false);
    onFilterChange(searchQuery, continent, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategoryDropdownOpen(false);
    onFilterChange(searchQuery, selectedContinent, category);
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      {/* Search by Keyword */}
      <div className="relative flex-1 max-w-sm">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search by Keyword..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Continent Dropdown */}
      <div className="relative">
        <div
          onClick={toggleContinentDropdown}
          className="flex items-center justify-between border border-gray-300 p-2 rounded-md cursor-pointer w-48"
        >
          <span>{selectedContinent}</span>
          <FaAngleDown />
        </div>
        {continentDropdownOpen && (
          <ul className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <li onClick={() => handleContinentChange("All")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">All</li>
            <li onClick={() => handleContinentChange("Africa")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Africa</li>
            <li onClick={() => handleContinentChange("Asia")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Asia</li>
            {/* Add more continents as needed */}
          </ul>
        )}
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <div
          onClick={toggleCategoryDropdown}
          className="flex items-center justify-between border border-gray-300 p-2 rounded-md cursor-pointer w-48"
        >
          <span>{selectedCategory}</span>
          <FaAngleDown />
        </div>
        {categoryDropdownOpen && (
          <ul className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <li onClick={() => handleCategoryChange("All")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">All</li>
            <li onClick={() => handleCategoryChange("Science")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Science</li>
            <li onClick={() => handleCategoryChange("Technology")} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Technology</li>
            {/* Add more categories as needed */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
