import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");
import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

// 鍵を生成する
function generateKey() {
  // 32バイトの暗号論的疑似乱数を生成する
  // ここを埋める
  const randomData = randomBytes(32);
  //console.log(randomData);
  return randomData;
}

// 平文を鍵とAES-256-CBCで暗号化する。次に、暗号文と初期化ベクトル(IV)を、Base64エンコードして返す。
function encrypt64(text, key) {
  // 16バイトの暗号論的疑似乱数を初期化ベクトル (IV) とする
  // ここを埋める
  const iv = randomBytes(16);
  //console.log(iv);

  // 暗号化とBase64エンコード
  // ここを埋める
  // 暗号化用のcipherを作成
  const cipher = createCipheriv("aes-256-cbc", key, iv);

  // 平文を暗号化（エンコード後にバイナリデータとして暗号化）
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  // 暗号文とIVをbase64で返す
  return {
    value: Buffer.from(encrypted, "hex").toString("base64"),
    iv: iv.toString("base64"),
  };
}

// generateKeyの返り値を、JSON形式でファイルに保存する(非同期)
async function writeKey(key) {
  // ここを埋める（fs.promisesで鍵を保存）
  try {
    const jsonKey = key.toString("base64");
    await fs.promises.writeFile("key.json", JSON.stringify({ key: jsonKey }));
  } catch (err) {
    console.log("エラー", err);
  }
}

// encrypt64の返り値を、JSON形式でファイルに保存する(非同期)
async function writeEncrypt64(data) {
  // ここを埋める（fs.promisesで暗号データを保存）
  try {
    await fs.promises.writeFile("encryptedData.json", JSON.stringify(data));
  } catch (err) {
    console.log("エラー", err);
  }
}

async function readKey() {
  // ここを埋める（return Promise<鍵>）
  try {
    const data = await fs.promises.readFile("key.json", "utf-8");
    const json = JSON.parse(data);
    const key = Buffer.from(json.key, "base64");
    return key;
  } catch (err) {
    console.log("エラー", err);
  }
}

// ファイルから暗号データを読み込む (非同期)
async function readEncrypt64() {
  // ここを埋める（return Promise<data>）
  try {
    const data = await fs.promises.readFile("encryptedData.json", "utf-8");
    const json = JSON.parse(data);
    return json;
  } catch (err) {
    console.log("エラー", err);
  }
}

// 復号して平文を返す
function decrypt64(data, key) {
  // ここを埋める
  const iv = Buffer.from(data.iv, "base64");
  const encryptedText = Buffer.from(data.value, "base64").toString("hex");
  const decipher = createDecipheriv("aes-256-cbc", key, iv);

  // 暗号文を復号
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

// 指定の平文を暗号化とBase64エンコードし、後に復号する一連の処理
(async () => {
  // 平文
  const text = "Hello, World!";

  // 暗号化とBase64エンコード
  const key = generateKey();
  const encryptedData = encrypt64(text, key);

  // 鍵と暗号データをJSONで保存
  await writeKey(key);
  await writeEncrypt64(encryptedData);

  console.log("Encrypted Text (Base64):", encryptedData.value);

  // Base64デコードと復号
  const storedKey = await readKey();
  const storedEncryptedData = await readEncrypt64();
  const decryptedText = decrypt64(storedEncryptedData, storedKey);

  console.log("Decrypted Text:", decryptedText);
})();
