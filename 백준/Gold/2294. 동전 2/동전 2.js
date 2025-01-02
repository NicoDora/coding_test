const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const dp = Array(k + 1).fill(100001);
const coins = input.slice(1).map(Number);

dp[0] = 0;

for (let i = 0; i < n; i++) {
  const coin = coins[i];

  for (let j = coin; j <= k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
  }
}

console.log(dp[k] === 100001 ? -1 : dp[k]);