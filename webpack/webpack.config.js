module.exports = {

  mode: 'production',

  entry: __dirname + '/src/main.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
};