const path = require('path');
module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve('./bundle'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.js|x$/, loader: 'babel-loader', exclude: /node_modules/ },
      // { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}