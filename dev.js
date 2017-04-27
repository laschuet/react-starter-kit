var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.dev.config');

process.env.NODE_ENV = 'development';

var app = express();
var compiler = webpack(config);
var host = 'localhost';
var port = 4000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, host, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('server is listening at http://' + host + ':' + port);
  console.log('webpack building...');
});
