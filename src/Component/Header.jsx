import React, { useState, useRef } from "react";
import { FaAngleDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, translations, switchLanguage } = useLanguage(); // Correct usage
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="flex justify-between items-center p-5 bg-white border-b border-gray-200 shadow-md">
      {/* Logo */}
      <div className="logo">
        <img
          src="zblog.png"
          alt="Logo"
          className="h-16 w-16" // Increased the logo size (height and width)
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-lg"> {/* Increased font size here */}
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">
          {translations.about}
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">
          {translations.contact}
        </Link>
        <Link to="/vision" className="text-gray-700 hover:text-blue-500">
          {translations.vision}
        </Link>
      </nav>

      {/* Actions (Search and Language Dropdown) */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder={translations.search}
            className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-700 hover:text-blue-500 p-2 bg-transparent border-none cursor-pointer"
          >
            <MdLanguage className="mr-2" />
            {language === "en" ? "English" : language === "es" ? "Spanish" : "French"}
            <FaAngleDown className="ml-2" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute top-12 right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <li
                onClick={() => switchLanguage("en")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                English
              </li>
              <li
                onClick={() => switchLanguage("es")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                Spanish
              </li>
              <li
                onClick={() => switchLanguage("fr")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                French
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-500"
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-md z-20 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`} // Slower transition speed
      >
        <div className="p-4 flex justify-between items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-500">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            {translations.about}
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            {translations.contact}
          </Link>
          <Link to="/vision" className="text-gray-700 hover:text-blue-500">
            {translations.vision}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
