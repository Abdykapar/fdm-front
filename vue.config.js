module.exports = {
  lintOnSave: true,

  css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/style/_variables.scss";`
        }
      }
    },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
