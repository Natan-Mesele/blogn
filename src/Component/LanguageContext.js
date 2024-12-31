import React, { createContext, useState, useContext } from "react";

// Translation data
const translations = {
  en: {
    about: "About",
    contact: "Contact",
    vision: "Vision",
    search: "Search",
  },
  es: {
    about: "Acerca de",
    contact: "Contacto",
    vision: "Visión",
    search: "Buscar",
  },
  fr: {
    about: "À propos",
    contact: "Contact",
    vision: "Vision",
    search: "Rechercher",
  },
};

// Create Context
const LanguageContext = createContext();

// Language Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook
export const useLanguage = () => useContext(LanguageContext);
