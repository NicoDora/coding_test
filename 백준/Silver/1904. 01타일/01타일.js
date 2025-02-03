const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const MAX = N + 1;
const dp = Array(MAX).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < MAX; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);