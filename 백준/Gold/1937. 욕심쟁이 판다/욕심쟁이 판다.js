const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(x, y) {
  if (dp[x][y]) return dp[x][y];
  dp[x][y] = 1;

  for (let k = 0; k < 4; k++) {
    const dx = x + directions[k][0];
    const dy = y + directions[k][1];

    if (
      dx >= 0 &&
      dx < n &&
      dy >= 0 &&
      dy < n &&
      forest[dx][dy] > forest[x][y]
    ) {
      dp[x][y] = Math.max(dp[x][y], dfs(dx, dy) + 1);
    }
  }

  return dp[x][y];
}

const n = Number(input[0]);
const forest = input.slice(1).map((row) => row.split(" ").map(Number));
const dp = Array.from({ length: n }, () => Array(n).fill(0));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let result = 0;

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    result = Math.max(result, dfs(x, y));
  }
}

console.log(result);