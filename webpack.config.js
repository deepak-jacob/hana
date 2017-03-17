const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client/main.jsx'),
  ],
  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [{
      loaders: ['babel-loader', 'eslint-loader'],
      // loaders: ['babel-loader'],
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'client'),
      ],
    }, {
      test: /\.json?$/,
      loader: 'json-loader',
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
