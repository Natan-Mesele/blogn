import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <header className="flex justify-between items-center p-5 bg-white border-b border-gray-200 shadow-md">
      <div className="logo">
        <img src="https://www.scottleroymarketing.com/wp-content/uploads/2016/06/Hiring-a-good-logo-designing-company-to-create-your-logo-1.jpeg" alt="Logo" className="h-12" />
      </div>

      <nav className="flex space-x-8">
        <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        <a href="#vision" className="text-gray-700 hover:text-blue-500">Vision</a>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Search Icon and Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button 
            onClick={toggleDropdown} 
            className="flex items-center text-gray-700 hover:text-blue-500 p-2 bg-transparent border-none cursor-pointer"
          >
            <MdLanguage className="mr-2" />
            {selectedLanguage} 
            <FaAngleDown className="ml-2" />
          </button>

          {isDropdownOpen && (
            <ul className="absolute top-12 right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <li 
                onClick={() => handleLanguageChange('English')} 
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                English
              </li>
              <li 
                onClick={() => handleLanguageChange('Spanish')} 
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                Spanish
              </li>
              <li 
                onClick={() => handleLanguageChange('French')} 
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                French
              </li>
              {/* Add more languages as needed */}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
