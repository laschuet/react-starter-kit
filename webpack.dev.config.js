const path = require('path');
const webpack = require('webpack');
const structureConfig = require('./structure.config.js');

const { paths } = structureConfig;
const { filenames } = structureConfig;

const config = {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.join(paths.source, filenames.indexJS),
    ],
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
    modules: [paths.source, paths.nodeModules],
  },
  context: paths.source,
  output: {
    filename: filenames.dev.JS,
    path: paths.dev,
    publicPath: '/dev/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: paths.source,
      },
      {
        test: /\.(eot|jpe?g|png|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
