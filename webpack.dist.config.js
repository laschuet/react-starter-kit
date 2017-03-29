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
    vendors: [
      'history',
      'isomorphic-fetch',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ],
    app: path.join(paths.source, filenames.indexJS)
  },
  output: {
    filename: filenames.dist.JS,
    path: paths.dist
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
    modules: [paths.source, paths.nodeModules]
  },
  module: {
    loaders: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract('css-loader?sourceMap&' +
          'modules&importLoaders=1&' +
          'localIdentName=[name]__[local]__[hash:base64:5]')
    }, {
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: paths.nodeModules
    }, {
      test: /\.(png|jpe?g)(\?.*)?$/,
      use: 'url-loader?limit=8192'
    }, {
      test: /\.(svg|ttf|woff|woff2|eot)(\?.*)?$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: filenames.dist.vendorsJS
    }),
    new ExtractTextPlugin({
      filename: filenames.dist.CSS,
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
