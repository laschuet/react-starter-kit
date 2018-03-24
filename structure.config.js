const path = require('path');

const config = {
  paths: {
    dev: path.resolve(__dirname, 'dev'),
    dist: path.resolve(__dirname, 'dist'),
    nodeModules: path.resolve(__dirname, 'node_modules'),
    source: path.resolve(__dirname, 'src'),
  },
  filenames: {
    dev: {
      JS: '[name].js',
    },
    dist: {
      CSS: '[name].css',
      JS: '[name].js',
      vendorsJS: 'vendors.js',
    },
    indexJS: 'index.jsx',
    indexHTML: 'index.html',
  },
};

module.exports = config;
