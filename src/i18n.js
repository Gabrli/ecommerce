import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        searchInputPlaceholder: "Search name product",
        btnLogin: "Login",
        baner_title: "The New Collection !",
        btn_baner: "Try now !"
      },
    },
    pl: {
      translation: {
        searchInputPlaceholder: "Znajdź produkt",
        btnLogin: "Zaloguj",
        baner_title: "Nowa kolekcja !",
        btn_baner: "Sprawdź teraz !",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;