//以下の各関数を指示に従って修正しなさい
//出題範囲: 13.2
function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

// 0, 1, 2, 3 秒待つ
const wait0 = () => wait(0);
const wait1 = () => wait(1000);
const wait2 = () => wait(2000);
const wait3 = () => wait(3000);

// ログ出力
const log = (v) => console.log(v);
const logA = (v) => console.log("A");
const logB = (v) => console.log("B");
const logC = (v) => console.log("C");

// 例外
const errX = () => {
  throw new Error("X");
};
const errY = () => {
  throw new Error("Y");
};

function g1() {
  // TODO: then のネストを無くしなさい
  return wait(1000).then(() => {
    console.log("A");
    return wait(2000).then(() => {
      console.log("B");
      return wait(3000).then(() => {
        console.log("C");
      });
    });
  });
}

//g1();1秒後にA,2秒後にB,3秒後にCを出力する

async function _g1() {
  await wait(1000);
  console.log("A");

  await wait(2000);
  console.log("B");

  await wait(3000);
  console.log("C");
}

//_g1();

function g2() {
  // TODO: new Promise を使わないように書き換えなさい
  return new Promise((resolve, reject) => {
    wait(1000)
      .then(() => console.log("A"))
      .then(() => wait(2000))
      .then(() => console.log("B"))
      .then(() => wait(3000))
      .then(() => console.log("C"))
      .then(resolve, reject);
  });
}

//g2(); //1秒後にA,2秒後にB,3秒後にCを出力する

//_g1と同じ？
async function _g2() {
  await wait(1000);
  console.log("A");

  await wait(2000);
  console.log("B");

  await wait(3000);
  console.log("C");
}

//_g2();

function g3() {
  // 以下2つの関数が存在するとします (中身は適当)
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }

  // TODO: var, let, const による変数宣言を無くしなさい。async/awaitは使用しないこと。
  let temp = 0;
  return fetchUser()
    .then((user) => {
      temp = user;
      return fetchUserFriends(user);
    })
    .then((friends) => {
      console.log(`${temp.name} has ${friends.length} friends!`);
    });
}

//g3(); //John has 2 friends!が出力

function _g3() {
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }

  //fetchUserで取得した値を引数にして次のfetchuserFriendsに渡す
  return fetchUser().then((user) => {
    return fetchUserFriends(user).then((friends) => {
      console.log(`${user.name} has ${friends.length} friends!`);
    });
  });
}

//_g3();

function g4() {
  function someFunction() {
    return 42;
  }

  // NOTE: この関数 g4 は Promise を返す必要があるものとする
  // (利用しているフレームワークはライブラリがそういう関数を要求するとでも思って下さい)
  // TODO: new Promise を使わないように書き換えなさい。async/awaitは使用しないこと。
  return new Promise((resolve) => {
    let value = someFunction();
    return value;
  });
}

function _g4() {
  function someFunction() {
    return 42;
  }

  return someFunction().then((value) => {});
}
