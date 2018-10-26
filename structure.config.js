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
      js: '[name].js',
    },
    dist: {
      css: '[name].css',
      js: '[name].js',
    },
    indexEjs: 'index.ejs',
    indexJsx: 'index.jsx',
    indexHtml: 'index.html',
  },
};

module.exports = config;
