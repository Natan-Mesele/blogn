// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "about": "About",
      "contact": "Contact",
      "vision": "Vision",
      "search": "Search...",
      "selectedLanguage": "English",
    }
  },
  es: {
    translation: {
      "about": "Acerca de",
      "contact": "Contacto",
      "vision": "Visión",
      "search": "Buscar...",
      "selectedLanguage": "Español",
    }
  },
  fr: {
    translation: {
      "about": "À propos",
      "contact": "Contact",
      "vision": "Vision",
      "search": "Rechercher...",
      "selectedLanguage": "Français",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language if key not found
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
