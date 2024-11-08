import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (language) => {
    const langCode = language === 'English' ? 'en' : language === 'Spanish' ? 'es' : 'fr';
    console.log(`Changing language to: ${langCode}`);
    
    i18n.changeLanguage(langCode)
      .then(() => {
        console.log(`Current language set to: ${i18n.language}`);
        setDropdownOpen(false);
      })
      .catch((error) => console.error("Failed to change language", error));
  };

  return (
    <header className="flex justify-between items-center p-5 bg-white border-b border-gray-200 shadow-md">
      <div className="logo">
        <img src="https://www.scottleroymarketing.com/wp-content/uploads/2016/06/Hiring-a-good-logo-designing-company-to-create-your-logo-1.jpeg" alt="Logo" className="h-12" />
      </div>

      <nav className="flex space-x-8">
        <a href="#about" className="text-gray-700 hover:text-blue-500">{t('about')}</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-500">{t('contact')}</a>
        <a href="#vision" className="text-gray-700 hover:text-blue-500">{t('vision')}</a>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Search Icon and Input */}
        <div className="relative">
          <input
            type="text"
            placeholder={t('search')}
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
            {i18n.language === 'en' ? 'English' : i18n.language === 'es' ? 'Spanish' : 'French'}
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
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
