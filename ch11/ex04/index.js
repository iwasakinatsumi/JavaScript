// これから (N, K) と (K, M) の行列の乗算を行う (この値は色々変更して試すこと)
const [N, K, M] = [10, 20, 30];

// 配列版: (N, K) の行列を要素数 N * K の1次元配列で表現する ((i, j) は array[K * i + j] で参照)
const lhsA = Array(N * K)
  .fill(0.0)
  .map(() => Math.random());
const rhsA = Array(K * M)
  .fill(0.0)
  .map(() => Math.random());
const resultA = Array(N * M).fill(0.0);

//(N,K) = (1,2)
//(K,M) =
// (1,2,3)
// (4,5,6)

function arrayMultiply() {
  resultA.fill(0.0);
  // 問題: ここで resultA に lhsA と rhsA の乗算結果を格納してね
  //うまいことループさせて桁大きくしても大丈夫なようにする
  // resultA[0] = lhsA[0] * rhsA[0] + lhsA[1] * rhsA[1];
  // resultA[1] = lhsA[0] * rhsA[2] + lhsA[1] * rhsA[3];
  // resultA[2] = lhsA[0] * rhsA[4] + lhsA[1] * rhsA[5];

  for (i = 0; i++; i < M) {
    for (k = 0; k++; k < K) {
      for (j = 0; (j = j + 2); j < K * M) {
        resultA[i] = lhsA[k] * rhsA[j] + lhsA[k + 1] * rhsA[j + 1];
      }
    }
  }
}

// 型付き配列版 (Float64Array 以外の型も試してみると良い)
const lhsB = new Float64Array(N * K).fill(0.0).map((_, i) => lhsA[i]);
const rhsB = new Float64Array(K * M).fill(0.0).map((_, i) => rhsA[i]);
const resultB = new Float64Array(N * M).fill(0.0);

function typedArrayMultiply() {
  resultB.fill(0.0);
  // 問題: ここで resultB に lhsB と rhsB の乗算結果を格納してね
  // resultB[0] = lhsB[0] * rhsB[0] + lhsB[1] * rhsB[1];
  // resultB[1] = lhsB[0] * rhsB[2] + lhsB[1] * rhsB[3];
  // resultB[2] = lhsB[0] * rhsB[4] + lhsB[1] * rhsB[5];

  for (i = 0; i++; i < M) {
    for (k = 0; k++; k < K) {
      for (j = 0; (j = j + 2); j < K * M) {
        resultB[i] = lhsB[k] * rhsB[j] + lhsB[k + 1] * rhsB[j + 1];
      }
    }
  }
}

const TEST_TIMES = 100;
const TESTS = [arrayMultiply, typedArrayMultiply];
function test(fn) {
  let result;
  for (let i = 0; i < TEST_TIMES; ++i) {
    result = fn();
  }
  return result;
}

// warmup
for (let i = 0; i < TESTS.length; ++i) {
  test(TESTS[i]);
}

// 測定開始
for (let i = 0; i < TESTS.length; ++i) {
  const start = performance.now();
  test(TESTS[i]);
  const end = performance.now();
  console.log(`${TESTS[i].name}: ${end - start}`);
}
