const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function pages() {
  if (process.env.NODE_ENV === 'examples') {
    return {
      examples: {
        entry: "./examples/main.js",
        template: "./examples/index.html",
        filename: "index.html"
      }
    }
  }
  return {
    dev: {
      entry: "./dev/main.js",
      template: "./dev/index.html",
      filename: "index.html"
    }
  }
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
      library: 'Fit2CloudUI',
    }
  },
  pages: pages()
};
