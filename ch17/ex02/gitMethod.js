import axios from "axios"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"

// GitHubのAPIトークンとリポジトリ情報
const GITHUB_API_URL = "https://api.github.com"
const REPO_OWNER = process.env.GITHUB_OWNER
const REPO_NAME = process.env.GITHUB_REPO
const TOKEN = process.env.GITHUB_TOKEN

// HTTPリクエストに必要なヘッダー
const headers = {
  Authorization: `token ${TOKEN}`,
  Accept: "application/vnd.github.v3+json",
}

// 詳細なHTTPリクエストログを出力する関数
function logVerbose(response) {
  if (yargs.argv.verbose) {
    console.log(
      `Request: ${response.config.method.toUpperCase()} ${response.config.url}`,
    )
    console.log(`Response: ${response.status} ${response.statusText}`)
  }
}

// Issueを作成する関数
async function createIssue(title, body) {
  try {
    const response = await axios.post(
      `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      { title, body },
      { headers },
    )
    logVerbose(response)
    console.log(
      `Issue created: #${response.data.number} - ${response.data.title}`,
    )
  } catch (error) {
    console.error(
      `Error creating issue: ${error.response ? error.response.data.message : error.message}`,
    )
  }
}

// Issueをクローズする関数
async function closeIssue(issueId) {
  try {
    const response = await axios.patch(
      `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues/${issueId}`,
      { state: "closed" },
      { headers },
    )
    logVerbose(response)
    console.log(`Issue #${issueId} closed.`)
  } catch (error) {
    console.error(
      `Error closing issue #${issueId}: ${error.response ? error.response.data.message : error.message}`,
    )
  }
}

// オープンなIssue一覧を表示する関数
async function listOpenIssues() {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      { headers, params: { state: "open" } },
    )
    logVerbose(response)
    if (response.data.length === 0) {
      console.log("No open issues.")
    } else {
      console.log("Open Issues:")
      response.data.forEach((issue) => {
        console.log(`#${issue.number} - ${issue.title}`)
      })
    }
  } catch (error) {
    console.error(
      `Error fetching open issues: ${error.response ? error.response.data.message : error.message}`,
    )
  }
}

// コマンドライン引数の処理
yargs(hideBin(process.argv))
  .command("create <title> <body>", "Create a new issue", (yargs) => {
    yargs
      .positional("title", {
        describe: "The title of the issue",
        type: "string",
      })
      .positional("body", {
        describe: "The body content of the issue",
        type: "string",
      })
  })
  .command("close <issueId>", "Close an issue", (yargs) => {
    yargs.positional("issueId", {
      describe: "The ID of the issue to close",
      type: "number",
    })
  })
  .command("list", "List open issues")
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Enable verbose HTTP logging",
  })
  .help()
  .parse()

// コマンドに応じて処理を実行
if (yargs.argv._.includes("create")) {
  createIssue(yargs.argv.title, argv.body)
} else if (yargs.argv._.includes("close")) {
  closeIssue(yargs.argv.issueId)
} else if (yargs.argv._.includes("list")) {
  listOpenIssues()
}

export { createIssue, closeIssue, listOpenIssues }
