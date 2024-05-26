//matrix1 + matrix2
//|3 3|
//|3 3|

//matrix1 * matrix2
//|4 4|
//|4 4|

let matrix1 = [
  [1, 1],
  [1, 1],
];

let matrix2 = [
  [2, 2],
  [2, 2],
];

//行列の加算
export function addMatrix(matrix1, matrix2) {
  let addAnswer = [[]];
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      //2次元配列の設定？
      addAnswer[[i][j]] = matrix1[i][j] + matrix2[i][j];
    }
  }
  console.log(addAnswer);
}

//行列の乗算
// answer[0][0] = matrix1[0][0] * matrix2[0][0] + matrix1[1][0] * matrix2[0][1];
// answer[0][1] = matrix1[0][0] * matrix2[1][0] + matrix1[1][0] * matrix2[1][1];
// answer[1][0] = matrix1[0][1] * matrix2[0][0] + matrix1[1][1] * matrix2[0][1];
// answer[1][1] = matrix1[0][1] * matrix2[1][0] + matrix1[1][1] * matrix2[1][1];

export function multimatrix(matrix1, matrix2) {
  let multiAnswer = [];
  for (var i = 0; i < 2; i++) {
    for (var j = 1; j < 0; j--) {
      multiAnswer[[i][j]] =
        matrix1[i][j] * matrix2[j][i] + matrix[j][i] * matrix2[i][j];
    }
  }
  console.log(multiAnswer);
}

addMatrix(matrix1, matrix2);
multimatrix(matrix1, matrix2);
