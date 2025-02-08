const fs = require("fs");
const K = Number(fs.readFileSync(0, "utf-8").toString().trim());

const dp = Array.from({ length: K + 1 }, () => []);

dp[1] = [0, 1];
dp[2] = [1, 1];

for (let i = 3; i <= K; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

console.log(dp[K].join(" "));