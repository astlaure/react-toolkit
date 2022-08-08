import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: [
        'path',
        // 'subdomain',
        // 'htmlTag',
        // 'navigator',
        // 'querystring',
        // 'cookie',
        // 'sessionStorage',
        // 'localStorage'
      ],
    },
  });

export default i18next;
