// index.test.js

const axios = require("axios");
const axiosMockAdapter = require("axios-mock-adapter");
const { createIssue, closeIssue, listOpenIssues } = require("./gitMethod");

// GitHubのAPIトークンとリポジトリ情報
const GITHUB_API_URL = "https://api.github.com";
const REPO_OWNER = process.env.GITHUB_OWNER;
const REPO_NAME = process.env.GITHUB_REPO;

describe("GitHub Issue CLI tests", () => {
  let mock;

  beforeEach(() => {
    // axios のモックをセットアップ
    mock = new axiosMockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  test("createIssue should create an issue and return success", async () => {
    // モックレスポンスの設定
    const mockResponse = {
      number: 1,
      title: "New Issue",
      body: "This is a new issue.",
    };
    mock
      .onPost(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`)
      .reply(201, mockResponse);

    const response = await createIssue("New Issue", "This is a new issue.");
    expect(response.success).toBe(true);
    expect(response.data.number).toBe(1);
    expect(response.data.title).toBe("New Issue");
  });

  test("closeIssue should close an issue and return success", async () => {
    const mockResponse = {
      number: 1,
      state: "closed",
    };
    mock
      .onPatch(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues/1`)
      .reply(200, mockResponse);

    const response = await closeIssue(1);
    expect(response.success).toBe(true);
    expect(response.data.state).toBe("closed");
  });

  test("listOpenIssues should list open issues", async () => {
    const mockResponse = [
      { number: 1, title: "Open Issue 1" },
      { number: 2, title: "Open Issue 2" },
    ];
    mock
      .onGet(`${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/issues`)
      .reply(200, mockResponse);

    const response = await listOpenIssues();
    expect(response.success).toBe(true);
    expect(response.data.length).toBe(2);
    expect(response.data[0].number).toBe(1);
    expect(response.data[0].title).toBe("Open Issue 1");
  });
});
