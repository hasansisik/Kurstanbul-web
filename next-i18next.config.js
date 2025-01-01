// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeDetection: false,
  },
  fallbackLng: "en",
  ns: ["common"],
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
