module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/commons/scss/_variables.scss";`
      }
    }
  }
};
