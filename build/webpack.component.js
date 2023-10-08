'use strict'
const fs = require('fs');
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const {
  VueLoaderPlugin
} = require('vue-loader');

// 整理入口
const Components = fs.readdirSync('./src/components');
const dirs = Components.filter(v => {
  return fs.statSync(path.resolve('./src/components', v)).isDirectory();
});
const entries = {};
dirs.forEach(v => {
  entries[v] = `./src/components/${v}/index.js`;
});

const externals = [{vue: 'vue',}, nodeExternals()];

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(process.cwd(), './lib/'),
    filename: `[name].js`,
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
        },],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProgressPlugin(),
  ],
  optimization: {
    minimize: true,
  },
}
