const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'dev';
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./server/api.js');
 
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

if (env === 'dev') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
      },
    historyApiFallback: true,
  }));
}

app.post('/upload', api.sendAnalysis);
app.get('/analysis', api.getAnalysis);

 
const server = app.listen(port, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});