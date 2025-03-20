const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const matrix = input.slice(1).map((row) => row.split(" ").map(Number));
const dp = Array.from({ length: N }, () => Array(N).fill(Infinity));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) dp[i][j] = 0;
  }
}

for (let len = 2; len <= N; len++) {
  for (let i = 0; i <= N - len; i++) {
    let j = i + len - 1;

    for (let k = i; k < j; k++) {
      dp[i][j] = Math.min(
        dp[i][j],
        dp[i][k] + dp[k + 1][j] + matrix[i][0] * matrix[k][1] * matrix[j][1]
      );
    }
  }
}

console.log(dp[0][N - 1]);