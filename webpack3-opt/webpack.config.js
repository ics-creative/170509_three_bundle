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
        use : 'webpack-glsl-loader'
      }
    ]
  },

  plugins: [
    // 【効果：小】ライブラリ間で依存するモジュールの重複した出力を排除することで、
    // ファイルサイズを効果的に減らす事ができるプラグイン
    new webpack.optimize.DedupePlugin(),
    // 【効果：中】Scope Hoistingをするためのプラグイン
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 【効果：小】モジュールとチャンクのIDを使用(出現)頻度で割り当て、
    // 頻繁に使用されるIDに、より低い（より短い）IDを割り当てる事で、
    // 予測可能なIDの作成と、合計ファイルサイズを縮小することができるようになるプラグイン
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 【効果：小】既に十分に圧縮されている場合にも詳細にコードを分析し共通化できそうな箇所は
    // まとめてより積極的にコードを圧縮するためのプラグイン
    new webpack.optimize.AggressiveMergingPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      // マルチプロセスで高速化
      parallel: true
    }),
  ]
};