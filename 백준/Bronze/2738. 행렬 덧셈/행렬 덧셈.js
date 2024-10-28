const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 문제 제출 시

const [row, col] = input[0].split(" ").map(Number);
const A = [];
const B = [];

function create2dArray() {
  for (let i = 0; i < row; i++) {
    A.push([]);
    B.push([]);

    for (let j = 0; j < col; j++) {
      let colA = input[i + 1].split(" ").map(Number);
      let colB = input[i + 1 + row].split(" ").map(Number);

      A[i].push(colA[j]);
      B[i].push(colB[j]);
    }
  }
}

function sum2dArray(array1, array2, row, col) {
  let result = "";

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result += array1[i][j] + array2[i][j] + " ";
    }
    result += "\n";
  }
  return result;
}

create2dArray();

console.log(sum2dArray(A, B, row, col));