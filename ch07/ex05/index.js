//本章に登場した push/pop/shift/unshift/sort 等のメソッドは配列自体を変更する。
//このようなメソッドは「破壊的」であると呼ばれる (参考)。
//破壊的なメソッドは注意して利用しなければならない。例えば以下の displayUsers 関数を考える。

function displayUsers(users) {
  const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
  for (const u of sorted) {
    console.log(`${u.name}`);
  }
}

const users = [{ name: "hoge" }, { name: "fuga" }, { name: "piyo" }];
displayUsers(users);

// 注意: 以下の行は hoge ではなく fuga を表示する！
// (displayUsers 内の sort で引数の users が変更されるため)
console.log(users[0].name);

//関数が引数に対して破壊的な操作を行う場合、上記のように関数の利用者が驚く結果になることがある。そのようなコードは当然避けるべきである。
//また昨今では React のようなライブラリを利用する場合、破壊的な操作を避けることが推奨されるシーンがある (参考)。
//これはライブラリが「値が変更されたかどうか」を参照で比較するためである。

// users という状態を変更する処理を考える
const [users, setUsers] = useState([]);

const addNewUser = () => {
  // 以下は NG (値が変更されていないと React が判断してしまう)
  users.push({ name: "new user" });
  setUsers(users);

  // 以下は OK
  setUsers([...users, { name: "new user" }]);
};

//このように破壊的な操作を避けて配列の操作を行いたいシーンは多々考えられる。
//そこで以下のように push/pop/shift/unshift/sort の非破壊的版関数を書きなさい。各関数は返り値に変更後の新しい配列を返しなさい。

const seq = [1, 2, 3, 4, 5];

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
