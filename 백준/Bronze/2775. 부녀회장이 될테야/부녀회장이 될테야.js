const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const T = input[0];
const dp = Array.from({ length: 15 }, () => Array(15).fill(0));
const result = [];

for (let i = 1; i < 15; i++) {
  dp[0][i] = i;
}

for (let i = 1; i < 15; i++) {
  for (let j = 1; j < 15; j++) {
    for (let k = 1; k <= j; k++) {
      dp[i][j] += dp[i - 1][k];
    }
  }
}

for (let i = 1; i <= T * 2; i += 2) {
  const k = input[i];
  const n = input[i + 1];

  result.push(dp[k][n]);
}

console.log(result.join("\n"));