import nodeResolve  from 'rollup-plugin-node-resolve';
import buble        from 'rollup-plugin-buble';
import uglify       from 'rollup-plugin-uglify';
import {minify}     from 'uglify-js-harmony';

export default {
  entry: 'src/main.js',
  dest: 'build/bundle.js',
  plugins: [
    nodeResolve(), // Node.jsのモジュール読み込みに対応
    buble(), // ES5へ
    uglify({}, minify) // ファイルを小さくする
  ],
  format: "iife", // scriptタグの実行に適切な指定
  sourceMap: true // ソースマップの出力
};
