const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

i18next.use(Backend).use(middleware.LanguageDetector).init({
  fallbackLng: 'en',
  backend: { loadPath: './locales/{{lng}}.json' }
});

module.exports = middleware.handle(i18next);
