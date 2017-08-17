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
      'babel-polyfill',
      'history',
      'humps',
      'isomorphic-fetch',
      'lodash',
      'normalizr',
      'prop-types',
      'query-string',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'reselect'
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            sourceMap: true
          }
        }]
      })
    }, {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: paths.source
    }, {
      test: /\.(eot|jpe?g|png|svg|ttf|woff|woff2)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
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
        warnings: false
      }
    })
  ]
};

module.exports = config;
