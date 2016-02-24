'use strict';
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const forOwn = (obj, cb) => {
  for (let key in obj) obj.hasOwnProperty(key) && cb.call(obj, obj[key], key)
};
let includes = [];
forOwn(pkg.dependencies || {}, (v, name) => ~name.indexOf('react-') && includes.push(path.join(__dirname, `node_modules/${name}`)));

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './demo/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules', './src', './demo'],
    extensions: ['', '.js', '.jsx']
  },
  postcss: [require('autoprefixer')],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')].concat(includes)
    }, {
      test: /\.less/,
      loaders: ['style', 'css', 'postcss', 'less']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  }
};
