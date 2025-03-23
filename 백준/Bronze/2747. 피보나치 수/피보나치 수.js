const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());

const dp = Array(n + 1).fill(0);

dp[1] = dp[2] = 1;

if (n > 2) {
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
}

console.log(dp[n]);