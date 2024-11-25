const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());

const dp = new Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}

console.log(dp[n]);