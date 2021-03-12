'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');

// 整理入口
const Components = require('../components.json');
const config = require('../vue.config');
const entrys = {}
Object.keys(Components).forEach(item => {
  entrys[item] = Components[item]
})

const externals = [Object.assign({
  vue: 'vue',
}), nodeExternals()];

module.exports = {
  mode: 'production',
  entry: entrys,
  output: {
    path: path.resolve(process.cwd(), './lib/'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  externals: externals,
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': resolve('../src'),
    },
    modules: ['node_modules']
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[hash:5].[ext]',
            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
            publicPath: '../fonts/',
            outputPath: '/fonts/',
          },
        }, ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProgressPlugin(),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'theme/[name].css',
      allChunks: true
    }),
  ],
  optimization: {
    minimize: true,
  },
}
