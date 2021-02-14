module.exports = {
  devServer: {
    proxy: {
      "^/jira": {
        target: "https://artel-solutions.atlassian.net",
        changeOrigin: true,
        pathRewrite: { "^/jira": "/" }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/commons/scss/_variables.scss';"
      }
    }
  }
};
