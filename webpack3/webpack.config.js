const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.js',

  output: {
    path    : __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test   : /\.js$/,
        use    : 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.glsl$/,
        use: 'webpack-glsl-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.　　　　　　　　　　　　　(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};