module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js',
  ],

  output: {
    path: 'app',
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
