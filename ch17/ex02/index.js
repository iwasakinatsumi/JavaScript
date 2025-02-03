const yargs = require("yargs");
const { createIssue, closeIssue, listOpenIssues } = require("./gitMethod");

// コマンドライン引数の処理
const argv = yargs
  .command("create <title> <body>", "Create a new issue", (yargs) => {
    yargs
      .positional("title", {
        describe: "The title of the issue",
        type: "string",
      })
      .positional("body", {
        describe: "The body content of the issue",
        type: "string",
      });
  })
  .command("close <issueId>", "Close an issue", (yargs) => {
    yargs.positional("issueId", {
      describe: "The ID of the issue to close",
      type: "number",
    });
  })
  .command("list", "List open issues")
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Enable verbose HTTP logging",
  })
  .help().argv;

// コマンドに応じて処理を実行
if (argv._.includes("create")) {
  createIssue(argv.title, argv.body, argv.verbose).then((response) => {
    if (response.success) {
      console.log(
        `Issue created: #${response.data.number} - ${response.data.title}`,
      );
    } else {
      console.log(`Failed to create issue: ${response.error}`);
    }
  });
} else if (argv._.includes("close")) {
  closeIssue(argv.issueId, argv.verbose).then((response) => {
    if (response.success) {
      console.log(`Issue #${argv.issueId} closed.`);
    } else {
      console.log(`Failed to close issue #${argv.issueId}: ${response.error}`);
    }
  });
} else if (argv._.includes("list")) {
  listOpenIssues(argv.verbose).then((response) => {
    if (response.success) {
      if (response.data.length === 0) {
        console.log("No open issues.");
      } else {
        console.log("Open Issues:");
        response.data.forEach((issue) => {
          console.log(`#${issue.number} - ${issue.title}`);
        });
      }
    } else {
      console.log(`Failed to fetch open issues: ${response.error}`);
    }
  });
}
