const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "./",
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    output: {
      library: 'Fit2Cloud-UI',
    }
  },
  pages: {
    demo: {
      entry: "./demo/main.js",
      template: "./demo/index.html",
      filename: "index.html"
    }
  }
};
