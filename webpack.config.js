var path = require('path');
var webpack = require('webpack');
var structureConfig = require('./structure.config.js');

var paths = structureConfig.paths;
var filenames = structureConfig.filenames;

var config = {
  devtool: 'eval',
  entry: {
    all: [
      'webpack-hot-middleware/client',
      path.join(paths.source, filenames.indexJS)
    ]
  },
  output: {
    filename: filenames.dev.JS,
    path: paths.dev,
    publicPath: '/dev/'
  },
  resolve: {
    extensions: ['', '.css', '.js'],
    root: paths.source
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?modules&importLoaders=1&' +
        'localIdentName=[name]__[local]___[hash:base64:5]',
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
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
