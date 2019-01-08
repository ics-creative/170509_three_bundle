module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.glsl$/,
        use: 'webpack-glsl-loader',
      },
    ],
  },
};
