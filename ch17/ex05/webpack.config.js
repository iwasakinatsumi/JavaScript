import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // エントリーポイント
  entry: './src/index.js', // index.jsがエントリーポイント

  // 出力設定
  output: {
    filename: 'bundle.js', // 出力ファイル名
    path: path.resolve('dist'), // 出力ディレクトリ
  },

  devtool: 'source-map', // ソースマップを生成するオプション
  mode: 'development', // 開発モード（プロダクションでは 'production'）

  // モジュールの設定
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScriptファイルを対象
        exclude: /node_modules/, // node_modulesは除外
        use: 'babel-loader', // Babelでトランスパイル
      },
      {
        test: /\.mp3$/, // 音声ファイルの扱い
        use: 'file-loader', // 音声ファイルを適切に処理
      },
    ],
  },

  // プラグインの設定
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // HTMLファイルのテンプレートを指定
    }),
  ],

  // 開発サーバー設定
  devServer: {
    static: {
      directory: path.join('dist'),
    },
    compress: true,
    port: 9000,
    open: true, // サーバー起動時にブラウザを自動で開く
  },
};
