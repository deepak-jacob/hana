const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const appConfig = require('./config/main.js');
const webpackConfig = require('../webpack.config');
require('./models').connect(appConfig.database);

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use(morgan('dev'));

// pass the authorization checker middleware
const authCheckMiddleware = require('./middleware/auth-check');

app.use('/users', authCheckMiddleware);

// app.use('/rcnuts', rcnsRouter);
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

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

module.exports = app;
