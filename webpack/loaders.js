'use strict';

exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  query: {
    useForkChecker: true,
    tsconfig: './tsconfig.json',
  },
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  test: /^(.(?!\.test))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  exclude: /node_modules/,
  loader: 'style-loader!css-loader'
};

exports.less = {
  test: /\.less$/,
  exclude: /node_modules/,
  loader: 'raw-loader!less-loader'
};

// Needed this since webpack was choking on json files within node_modules
exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

function makeFileLoader(pattern) {
  return {
    test: pattern,
    loader: 'url-loader?limit=100000',
    exclude: /node_modules/,
  };
}
