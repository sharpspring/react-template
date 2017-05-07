'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
  en_US: null,
  de_DE: require("./i18n/de_DE.json"),
};

module.exports = Object.keys(languages).map(function(language) {
  return {
    // The entry file. All your app roots fromn here.
    entry: [
      'babel-polyfill',
      path.join(__dirname, 'app/index.jsx')
    ],
    // Where you want the output to go
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: `${language}.[name].min.js`,
      publicPath: '/'
    },
    plugins: [
      // webpack gives your modules and chunks ids to identify them. Webpack can vary the
      // distribution of the ids to get the smallest id length for often used ids with
      // this plugin
      new webpack.optimize.OccurenceOrderPlugin(),

      // extracts the css from the js files and puts them on a separate .css file. this is for
      // performance and is used in prod environments. Styles load faster on their own .css
      // file as they dont have to wait for the JS to load.
      new ExtractTextPlugin('[name].min.css'),
      // handles uglifying js
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
          screw_ie8: true
        },
        sourceMap: false,
      }),
      // creates a stats.json
      new StatsPlugin('webpack.stats.json', {
        source: false,
        modules: false
      }),
      // plugin for passing in data to the js, like what NODE_ENV we are in.
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new I18nPlugin(
        languages[language]
      )
    ],

    // ESLint options
    eslint: {
      configFile: '.eslintrc',
      failOnWarning: false,
      failOnError: true
    },

    module: {
      // Runs before loaders
      preLoaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }],
      // loaders handle the assets, like transforming sass to css or jsx to js.
      loaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }]
    },
    postcss: [
      require('autoprefixer')
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: [
        path.resolve(__dirname, './app')
      ]
    }
  }
});
