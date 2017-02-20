const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const rcnsRouter = require('./routes/rcns');

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();
const port = 5001;
const mongoConnectString = 'mongodb://localhost:27017/hana';

mongoose.connect(mongoConnectString);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/rcnuts', rcnsRouter);

if (isDeveloping) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    // middleware.fileSystem.readFileSync(path.join(__dirname, '../index.html'))
    // compiler.outputFileSystem.readFileSync(path.join(__dirname, '../index.html'))
    res.write('Nf');
    res.end();
  });
}

app.listen(port);

/* eslint-disable no-console */
console.log(`Server running on port ${port} !!`);
