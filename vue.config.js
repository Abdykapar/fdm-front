module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/assets/style/_variables.scss";`
          }
        }
      }
}