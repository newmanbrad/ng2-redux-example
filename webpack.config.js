'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: { app: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',
  compress: true,
  cache: true,
  devtool: 'eval', // for faster builds use 'eval'

  resolve: { extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'] },
  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    node: {
      global: 'window',
      progress: true,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
    // proxy: Object.assign({}, proxy(), { '/api/*': 'http://localhost:3000' })
  },

  module: {
    preLoaders: [
      loaders.tslint,
    ],
    loaders: [
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.less,
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
      loaders.json,
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ],
  },
};
