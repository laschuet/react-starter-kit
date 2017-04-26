var path = require('path');
var webpack = require('webpack');
var structureConfig = require('./structure.config.js');

var paths = structureConfig.paths;
var filenames = structureConfig.filenames;

var config = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      path.join(paths.source, filenames.indexJS)
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
    modules: [paths.source, paths.nodeModules]
  },
  context: paths.source,
  output: {
    filename: filenames.dev.JS,
    path: paths.source,
    publicPath: '/dev/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ]
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
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: paths.source,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    port: 4000,
    publicPath: '/dev/'
  }
};

module.exports = config;
