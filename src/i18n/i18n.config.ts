import { InitOptions } from 'i18next';

const i18nConfig: InitOptions = {
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
};

export default i18nConfig;
