var path = require('path');

var config = {
  paths: {
    dev: path.join(__dirname, 'dev'),
    dist: path.join(__dirname, 'dist'),
    nodeModules: path.join(__dirname, 'node_modules'),
    source: path.join(__dirname, 'src')
  },
  filenames: {
    dev: {
      JS: '[name].js'
    },
    dist: {
      CSS: '[name].css',
      JS: '[name].js',
      vendorJS: 'vendor.js'
    },
    indexJS: 'index.js',
    indexHTML: 'index.html'
  }
};

module.exports = config;
