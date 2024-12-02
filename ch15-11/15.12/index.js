// 指定したファイルを OneDrive へアップロードするページを作成しなさい。
// API を実行するためのアクセストークンは、Graph Explorer で取得したものをユーザが入力できるようにしなさい。
// https://learn.microsoft.com/ja-jp/graph/graph-explorer/graph-explorer-overview
// 出題範囲: 15.11.1

async function uploadFile() {
  const accessToken = document.getElementById("accessToken").value;
  const fileInput = document.getElementById("fileInput");
  const statusDiv = document.getElementById("status");

  if (!accessToken) {
    statusDiv.innerText = "アクセストークンを入力してください。";
    return;
  }

  if (!fileInput.files.length) {
    statusDiv.innerText = "ファイルを選択してください。";
    return;
  }

  const file = fileInput.files[0];
  const fileName = file.name;
  const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/testfolder/${fileName}:/content`;

  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": file.type,
    },
    body: file,
  };

  try {
    const response = await fetch(uploadUrl, options);
    if (response.ok) {
      const result = await response.json();
      statusDiv.innerText = "アップロード成功: " + JSON.stringify(result);
    } else {
      const error = await response.json();
      statusDiv.innerText = "アップロード失敗: " + JSON.stringify(error);
    }
  } catch (error) {
    statusDiv.innerText = "エラー: " + error.message;
  }
}
