var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

process.env.NODE_ENV = 'development';
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);
var port = 4000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('server is listening at http://localhost:' + port);
  console.log('webpack is building...please wait...');
});
