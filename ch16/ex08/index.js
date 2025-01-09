/**
 * GitHub の REST API を利用して Issue を操作するコマンドラインツールを実装しなさい。最低限以下の要件を満たすこと。
 * 入力はコマンドライン引数から受け取る
 * Issue を作成できる
 * 指定した Issue をクローズできる
 * オープンな Issue の Id と Title の一覧を表示できる
 * -hまたは--helpオプションで使い方が確認できる
 * -vまたは--verboseオプションで HTTP ログを出力する
 * 出題範囲: 16.1, 16.8
 */
import { Command } from "commander";
//const dotenv = require("dotenv");

// .envファイルを読み込む
//dotenv.config();

// GitHub API の設定
const GITHUB_API_URL = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;

//sample
const program = new Command();

// program
//   .option("-g, --good-morning", "say good morning")
//   .option("-h, --hello", "say hello");

program
  .option("-h, --help", "say good morning") //helpの表示
  .option("-v, --verbose", "say hello"); //ログの出力

program.parse(process.argv);

const options = program.opts();

if (options.goodMorning) {
  console.log("Good morning!");
}

if (options.hello) {
  console.log("Hello!");
}
