const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

const components = fs.readdirSync('./packages/components');
const dirs = components.filter(v => {
  return fs.statSync(path.resolve('./packages/components', v)).isDirectory();
});

const entryHash = {};
dirs.forEach(v => {
  entryHash[v] = `./packages/components/${v}/index.js`;
});

const externals = [Object.assign({
  vue: 'vue',
}), nodeExternals()];

module.exports = {
  mode: 'production',
  entry: entryHash,
  output: {
    path: path.resolve(process.cwd(), './lib/'),
    publicPath: '/dist/',
    filename: '[name]/index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  externals: externals,
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:5].[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: '../fonts/',
              outputPath: '/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProgressPlugin(),
    new ExtractTextPlugin({
      filename: '[name]/index.css',
    }),
  ],
  optimization: {
    minimize: true,
  },
};