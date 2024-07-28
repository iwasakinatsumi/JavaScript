/**
 * テキストでは独自のエラーとして ParseError や HTTPError クラスの例がありました。
 * 自分でも独自のエラーを実装しなさい。
 * エラーの例が思いつかない場合には、ファイルのパスを引数に受けとる関数で、
 * ファイルのサイズが許容サイズをオーバーしている場合に投げるエラーを実装しなさい。
 */

class CapacityError extends Error {
  constructor(status, statusText, path) {
    super(`${status} ${statusText} : ${path}`);
    this.status = status;
    this.statusText = statusText;
    this.path = path;
  }

  get name() {
    return CapacityError;
  }
}

function checkCapacity(path) {}
