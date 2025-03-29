const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const T = input[0];
const dp = Array(10001).fill(0);
const result = [];

dp[0] = 1;

for (let coin = 1; coin <= 3; coin++) {
  for (let i = coin; i <= 10000; i++) {
    dp[i] += dp[i - coin];
  }
}

for (let i = 1; i <= T; i++) {
  const n = input[i];
  result.push(dp[n]);
}

console.log(result.join("\n"));