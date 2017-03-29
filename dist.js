var webpack = require('webpack');

var config = require('./webpack.dist.config');

process.env.NODE_ENV = 'production';
var compiler = webpack(config);
compiler.run(function (err, stats) {
  console.log('Webpack is building...please wait...');
  console.log(stats.toString({ colors: true }));
});
