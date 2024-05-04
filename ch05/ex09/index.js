export function parseJSON(arg) {
  try {
    const obj = JSON.parse(arg);
    return { success: true, data: obj };
  } catch (e) {
    return { success: false, error: e };
  }
}

//成功パターン
//console.log(parseJSON('{"result":true, "count":42}'));
//失敗パターン
//console.log(parseJSON("[1, 2, 3, 4, ]"));
