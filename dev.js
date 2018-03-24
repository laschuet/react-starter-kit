const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.dev.config');

process.env.NODE_ENV = 'development';

const app = express();
const compiler = webpack(config);
const host = 'localhost';
const port = 4000;

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
  }),
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, host, err => {
  if (err) {
    /* eslint-disable no-console */
    console.error(err);
    /* eslint-enable */
    return;
  }
  /* eslint-disable no-console */
  console.log(`server is listening at http://${host}:${port}`);
  console.log('webpack building...');
  /* eslint-enable */
});
