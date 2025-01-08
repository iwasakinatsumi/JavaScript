/**
 * Express フレームワークを利用して P.672 のサンプルコードと同等の HTTP サーバーを実装しなさい。
 * テストはSupertestを利用しなさい。
 * 出題範囲: 16.8
 */

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// GET エンドポイント
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

// POST エンドポイント
app.post("/echo", (req, res) => {
  const { message } = req.body;
  if (message) {
    res.status(200).json({ message });
  } else {
    res.status(400).json({ error: "error" });
  }
});

// サーバーを指定ポートで起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // テスト用にサーバーをエクスポート
