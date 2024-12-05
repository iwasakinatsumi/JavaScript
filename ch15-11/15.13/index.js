/**
 * Ollama(https://ollama.com/) はローカル環境で LLM が使えるツールである。
 * Ollama を使って、生成 AI とのチャットできる Web アプリケーションを作りなさい。
 * LLM のモデルはgemma:2B(https://ollama.com/library/gemma) 程度を用いなさい。以下のコマンドでローカル環境に LLM(gemma:2B) が起動する。
 * ollama run gemma:2b
 * ローカル環境に LLM のモデルが起動すると、Ollama のREST API(https://github.com/ollama/ollama?tab=readme-ov-file#rest-api)が使用できる。
 * Generate a chat completion API(https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-chat-completion) を使って、LLM の応答を逐次表示する以下のような UI をもつ Web アプリケーションを実装しなさい。逐次表示に関連するパラメータはstreamパラメータである(デフォルトで有効)。
 */

import ollama from "ollama";

const response = await ollama.chat({
  model: "llama2",
  messages: [{ role: "user", content: "Why is the sky blue?" }],
});
console.log(response.message.content);

// const express = require("express");
// const { exec } = require("child_process");
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(express.static("public"));

// // エンドポイントを作成して、Ollama を呼び出す
// app.post("/chat", (req, res) => {
//   const userMessage = req.body.message;

//   // Ollama コマンドを使用して AI モデルを呼び出す
//   exec(
//     `ollama complete --model "ollama/chat-gpt" --prompt "${userMessage}"`,
//     (err, stdout, stderr) => {
//       if (err) {
//         return res.status(500).json({ error: "Error interacting with Ollama" });
//       }
//       if (stderr) {
//         return res.status(500).json({ error: stderr });
//       }

//       // 結果を返す
//       res.json({ response: stdout.trim() });
//     }
//   );
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
