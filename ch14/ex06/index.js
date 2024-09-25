/**
 * 以下のような関数を作成しなさい。
 * ・任意のオブジェクトを引数に取る
 * ・そのオブジェクトの任意のメソッド呼び出しに対して、以下を持つオブジェクトを配列に追加して保存する Proxy を作成する。
 * 言い換えると Proxy 経由のオブジェクトのメソッド呼び出し履歴を配列に記録する
 * 　・呼び出された時刻
 * 　・メソッド名
 * 　・パラメータ(引数)
 * Proxy と 配列 双方への参照を返却する
 * 出題範囲: 14.6
 */

export function createMethodLogger(target) {
  const history = []; // 呼び出し履歴を保存する配列

  const handler = {
    get(target, prop, receiver) {
      const originalMethod = target[prop];

      // メソッドが存在し、かつ関数である場合
      if (typeof originalMethod === "function") {
        return function (...args) {
          const timestamp = new Date();
          const methodName = prop;

          // 履歴に追加
          history.push({
            timestamp,
            methodName,
            parameters: args,
          });

          // 元のメソッドを呼び出す
          return originalMethod.apply(this, args);
        };
      }

      // メソッドでない場合はそのまま返す
      return Reflect.get(target, prop, receiver);
    },
  };

  const proxy = new Proxy(target, handler);

  return { proxy, history };
}
