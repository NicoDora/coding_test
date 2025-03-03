const fs = require("fs");
const [n, ...array] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

// dp[i][j] : i번째 포도주를 마셨을 때의 최대 양. j: (0: 마시지않음, 1: 연속1회, 2: 연속2회)
const dp = Array.from({ length: n }, () => Array(3).fill(0));

dp[0][1] = array[0];

if (n > 1) {
  dp[1][0] = array[0];
  dp[1][1] = array[1];
  dp[1][2] = array[0] + array[1];
}

for (let i = 2; i < n; i++) {
  dp[i][0] = Math.max(...dp[i - 1]);
  dp[i][1] = dp[i - 1][0] + array[i];
  dp[i][2] = dp[i - 1][1] + array[i];
}

console.log(Math.max(...dp[n - 1]));