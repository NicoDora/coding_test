const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const paperCount = Number(input[0]);

const row = 100;
const col = 100;

function create2dArray(r, c, value) {
  const array = new Array(r);
  for (let i = 0; i < r; i++) {
    array[i] = new Array(c).fill(value);
  }
  return array;
}

function inputPaper() {
  for (let i = 1; i <= paperCount; i++) {
    const [startRow, startCol] = input[i].split(" ").map(Number);
    const [endRow, endCol] = [startRow + 9, startCol + 9];

    for (let j = startRow; j <= endRow; j++) {
      for (let k = startCol; k <= endCol; k++) {
        canvas[j][k] = 1;
      }
    }
  }
}

function calculrate() {
  let count = 0;
  for (let i = 0; i < row; i++) {
    count = count + canvas[i].filter((e) => 1 === e).length;
  }
  return count;
}

const canvas = create2dArray(row, col, 0);
inputPaper();
const result = calculrate();

console.log(result);