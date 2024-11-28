const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const array = [];
let nineCountInArray = 0;

for (let i = 1; i <= n; i++) {
  array.push(input[i].split(" "));
}

// 각 row의 9 개수 - row 중에서 가장 큰 부분의 행의 9의 개수
const nineOfRow = [];
for (let r = 0; r < n; r++) {
  let nineCountInRow = 0;

  for (let c = 0; c < m; c++) {
    const countInElement = array[r][c].split("9").length - 1;
    nineCountInRow += countInElement;
    nineCountInArray += countInElement;
  }

  nineOfRow.push(nineCountInRow);
}

// 각 col의 9 개수 - col 중에서 가장 큰 부분의 칼럼의 9의 개수
const nineOfCol = [];
for (let c = 0; c < m; c++) {
  let nineCountInCol = 0;

  for (let r = 0; r < n; r++) {
    const countInElement = array[r][c].split("9").length - 1;
    nineCountInCol += countInElement;
  }

  nineOfCol.push(nineCountInCol);
}

console.log(
  nineCountInArray - Math.max(Math.max(...nineOfRow), Math.max(...nineOfCol))
);