// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // エントリーポイント
  entry: "./src/index.js", // index.jsがエントリーポイント

  // 出力設定
  output: {
    filename: "bundle.js", // 出力ファイル名
    path: path.resolve(__dirname, "dist"), // 出力ディレクトリ
  },

  // モジュールの設定
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScriptファイルを対象
        exclude: /node_modules/, // node_modulesは除外
        use: "babel-loader", // Babelでトランスパイル
      },
      {
        test: /\.mp3$/, // 音声ファイルの扱い
        use: "file-loader", // 音声ファイルを適切に処理
      },
    ],
  },

  // プラグインの設定
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // HTMLファイルのテンプレートを指定
    }),
  ],

  // 開発サーバー設定
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
