const webpack = require('webpack');

const config = require('./webpack.dist.config');

process.env.NODE_ENV = 'production';
const compiler = webpack(config);
compiler.run((err, stats) => {
  console.log('webpack building...');
  console.log(stats.toString({ colors: true }));
});
