const fs = require('fs');
const path = require('path');

module.exports = {

  entry: path.resolve(path.join(__dirname, 'src', 'server', 'index.js')),

  output: {
    filename: 'server.bundle.js',
  },

  target: 'node',

  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server',
  ]).reduce((ext, mod) => {
    ext[mod] = `commonjs ${mod}`;
    return ext;
  }, {}),

  node: {
    __filename: false,
    __dirname: false,
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