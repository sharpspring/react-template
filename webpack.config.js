'use strict';

var path = require('path');
var webpack = require('webpack');
var I18nPlugin = require("i18n-webpack-plugin");
var argv = require('yargs').argv;
var language = argv.language || 'en_US';
var languageFile;

if (language !== 'en_US') {
  languageFile = require(`./i18n/${language}.json`);
}

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?https://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/index.jsx')
  ],
  paths: [
    './node_modules',
    './app'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: `${language}.[name].js`,
    publicPath: 'https://localhost:3000/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new I18nPlugin(languageFile)
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: true
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, './app')
    ]
  }
};
