var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var structureConfig = require('./structure.config.js');

var paths = structureConfig.paths;
var filenames = structureConfig.filenames;

var config = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
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
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            camelCase: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            modules: true,
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          enforce: true,
          filename: filenames.dist.vendorsJS,
          test: paths.nodeModules
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin({
      filename: filenames.dist.CSS,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: filenames.indexHTML,
      template: path.join(paths.source, filenames.indexHTML),
      inject: true
    })
  ]
};

module.exports = config;
