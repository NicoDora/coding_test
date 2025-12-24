const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
const MOD = 1000000000;

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  dp[i][0] = dp[i - 1][1];

  for (let j = 1; j <= 8; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
  }

  dp[i][9] = dp[i - 1][8];
}

console.log(dp[N].reduce((sum, n) => (sum = (sum + n) % MOD)));