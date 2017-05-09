import nodeResolve  from 'rollup-plugin-node-resolve';
import babel        from 'rollup-plugin-babel';
import commonjs     from 'rollup-plugin-commonjs';
import uglify       from 'rollup-plugin-uglify';
import {minify}     from 'uglify-js-harmony';

export default {
  entry: 'src/main.js',
  dest: 'build/bundle.js',
  plugins: [
    nodeResolve(), // Node.jsのモジュール読み込みに対応
    commonjs(), // require 系を処理できるようにする
    babel(), // ES5へトランスパイラする
    uglify({}, minify) // ファイルを小さくする
  ],
  format : "iife", // scriptタグの実行に適切な指定
  sourceMap: true // ソースマップの出力
};
