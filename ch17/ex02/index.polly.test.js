import { Polly } from "@pollyjs/core"
import { createIssue, closeIssue, listOpenIssues } from "./gitMethod"

describe("GitHub Issue CLI tests with Polly.js", () => {
  let polly

  beforeAll(() => {
    polly = new Polly("GitHub API Mock", {
      adapters: ["node-http"],
      persister: "fs",
      persisterOptions: {
        fs: {
          recordingsDir: "./recordings", // レコーディングファイルの保存場所
        },
      },
    })
  })

  afterAll(() => {
    polly.stop()
  })

  test("createIssue should create an issue and return success", async () => {
    // Polly.js が GitHub API のリクエストを記録し、レスポンスを再生します
    const response = await createIssue("New Issue", "This is a new issue.")
    expect(response.success).toBe(true)
    expect(response.data.number).toBe(1)
    expect(response.data.title).toBe("New Issue")
  })

  test("closeIssue should close an issue and return success", async () => {
    const response = await closeIssue(1)
    expect(response.success).toBe(true)
    expect(response.data.state).toBe("closed")
  })

  test("listOpenIssues should list open issues", async () => {
    const response = await listOpenIssues()
    expect(response.success).toBe(true)
    expect(response.data.length).toBeGreaterThan(0)
  })
})
