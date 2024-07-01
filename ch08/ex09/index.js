//以下のようなクラス Resource を考える。このクラスを利用する際は、必ず最後に close を呼ぶ必要がある。

class Resource {
  /** リソース解放のため利用終了時に呼び出すこと */
  close() {}
}

// const resource = new Resource(...);
// resource.doA();
// resource.doB();
// resource.close(); // これを忘れるとリソースがリークする

// 解放処理の呼び出し忘れによるリソースのリークにを防ぐため、終了時に必ず close が呼ばれるようにする withResource 関数を書きなさい

withResource(new Resource(), (resource) => {
  resource.doA();
  resource.doB();
}).bind(resource.close()); // 終了時に resource.close が自動で呼ばれる
