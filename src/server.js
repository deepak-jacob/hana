import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import rcnsRouter from './routes/rcns';

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();
const port = 5001;
const mongoConnectString = 'mongodb://localhost:27017/hana';

if(isDeveloping) {
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
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });
}

mongoose.connect(mongoConnectString);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/rcnuts', rcnsRouter);

app.listen(port);

console.log('Server running !!');
