const fs = require("fs");
const n = BigInt(fs.readFileSync(0, "utf-8").toString().trim());

const dp = Array(n + 1n).fill(0);

dp[1] = dp[2] = 1n;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(String(dp[n]));