const fs = require("fs");
const [N, ...input] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const score = [0, ...input];
const dp = Array(2);

for (let i = 0; i < 2; i++) {
  dp[i] = new Array(N + 1).fill(0);
}

dp[1][1] = score[1];
dp[0][2] = score[1] + score[2];
dp[1][2] = score[2];

for (let i = 3; i < N + 1; i++) {
  dp[0][i] = dp[1][i - 1] + score[i];
  dp[1][i] = Math.max(dp[0][i - 2], dp[1][i - 2]) + score[i];
}

console.log(Math.max(dp[0][N], dp[1][N]));