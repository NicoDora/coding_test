const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const array = input.slice(1).map((row) => row.split("").map(Number));
let result = 0;

for (let i = 0; i < n; i++) {
  if (array[i][0] === 1) result = 1;
}

for (let j = 0; j < m; j++) {
  if (array[0][j] === 1) result = 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!array[i][j] || i < 1 || j < 1) continue;

    array[i][j] =
      Math.min(array[i - 1][j], array[i][j - 1], array[i - 1][j - 1]) + 1;

    result = Math.max(result, array[i][j]);
  }
}

console.log(result ** 2);