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
export function add(matrix1, matrix2) {
  var res = [];
  var row1 = matrix1.length;
  var row2 = matrix2.length;
  var col1 = matrix1[0].length;
  var col2 = matrix2[0].length;
  for (var i = 0; i < row1; i++) {
    res.push([]);
    for (var j = 0; j < col2; j++) {
      res[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return res;
}

//行列の乗算
// answer[0][0] = matrix1[0][0] * matrix2[0][0] + matrix1[1][0] * matrix2[0][1];
// answer[0][1] = matrix1[0][0] * matrix2[1][0] + matrix1[1][0] * matrix2[1][1];
// answer[1][0] = matrix1[0][1] * matrix2[0][0] + matrix1[1][1] * matrix2[0][1];
// answer[1][1] = matrix1[0][1] * matrix2[1][0] + matrix1[1][1] * matrix2[1][1];

export function dot(matrix1, matrix2) {
  var res = [];
  var row1 = matrix1.length;
  var row2 = matrix2.length;
  var col1 = matrix1[0].length;
  var col2 = matrix2[0].length;

  for (var i1 = 0; i1 < row1; i1++) {
    res.push([]);
    for (var i2 = 0; i2 < col2; i2++) {
      res[i1].push(0);
      for (var i3 = 0; i3 < col1; i3++) {
        res[i1][i2] += matrix1[i1][i3] * matrix2[i3][i2];
      }
    }
  }
  return res;
}

add(matrix1, matrix2);
dot(matrix1, matrix2);
