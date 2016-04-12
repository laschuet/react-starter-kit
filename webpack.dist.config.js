var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var structureConfig = require('./structure.config.js');

var paths = structureConfig.paths;
var filenames = structureConfig.filenames;

var config = {
  devtool: 'source-map',
  entry: {
    vendor: [
      'history',
      'isomorphic-fetch',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-form',
      'redux-thunk'
    ],
    project: path.join(paths.source, filenames.indexJS)
  },
  output: {
    filename: filenames.dist.JS,
    path: paths.dist
  },
  resolve: {
    extensions: ['', '.css', '.js'],
    root: paths.source
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css?sourceMap')
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: paths.nodeModules
    }, {
      test: /\.(png|jpe?g)(\?.*)?$/,
      loader: 'url?limit=8192'
    }, {
      test: /\.(svg|ttf|woff|woff2|eot)(\?.*)?$/,
      loader: 'file'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: filenames.dist.vendorJS
    }),
    new ExtractTextPlugin(filenames.dist.CSS, {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: filenames.indexHTML,
      template: path.join(paths.source, filenames.indexHTML),
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
};

module.exports = config;
