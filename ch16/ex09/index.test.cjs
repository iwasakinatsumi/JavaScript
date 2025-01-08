const request = require("supertest");
const app = require("./server"); // Express サーバーをインポート

describe("GET /", () => {
  it("status 200", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200); // ステータスコードが 200 であることを確認
    expect(response.text).toBe("Hello, World!"); // レスポンスボディが 'Hello, World!' であることを確認
  });
});

describe("POST /echo", () => {
  it("echo", async () => {
    const message = { message: "Hello, Supertest!" };
    const response = await request(app).post("/echo").send(message);

    expect(response.status).toBe(200); // ステータスコードが 200 であることを確認
    expect(response.body.message).toBe(message.message); // メッセージが返ってきたことを確認
  });

  it("error", async () => {
    const response = await request(app).post("/echo").send({});

    expect(response.status).toBe(400); // ステータスコードが 400 であることを確認
    expect(response.body.error).toBe("error"); // エラーメッセージが適切であることを確認
  });
});
