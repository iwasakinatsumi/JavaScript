/**
 * Ollama(https://ollama.com/) はローカル環境で LLM が使えるツールである。
Ollama を使って、生成 AI とのチャットできる Web アプリケーションを作りなさい。
LLM のモデルはgemma:2B(https://ollama.com/library/gemma) 程度を用いなさい。以下のコマンドでローカル環境に LLM(gemma:2B) が起動する。

ollama run gemma:2b

ローカル環境に LLM のモデルが起動すると、Ollama のREST API(https://github.com/ollama/ollama?tab=readme-ov-file#rest-api)が使用できる。
Generate a chat completion API(https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-chat-completion) を使って、LLM の応答を逐次表示する以下のような UI をもつ Web アプリケーションを実装しなさい。逐次表示に関連するパラメータはstreamパラメータである(デフォルトで有効)。
 */
