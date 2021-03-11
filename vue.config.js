const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const config = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      chainWebpack: config => {
        config.devtool('source-map')
        config.resolve.alias.set('@', resolve('./src'))
        config.output.library("Fit2CloudUI")
      }
    }
  }

  if (process.env.NODE_ENV === 'examples') {
    return {
      publicPath: "./",
      chainWebpack: config => {
        config.devtool('source-map')
        config.resolve.alias.set('@', resolve('./src'))
        config.module
          .rule('example')
          .resourceQuery(/blockType=example/)
          .use('example-loader')
          .loader('./loaders/example-loader')
          .end()
      },
      pages: {
        examples: {
          entry: "./examples/main.js",
          template: "./examples/index.html",
          filename: "index.html",
          title: 'FIT2CLOUD UI',
        }
      }
    }
  }
}

module.exports = config();
