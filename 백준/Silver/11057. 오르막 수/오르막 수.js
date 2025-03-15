const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const dp = Array(10)
  .fill(0)
  .map((_, i) => i + 1);

for (let i = 1; i < N; i++) {
  for (let j = 1; j < 10; j++) {
    dp[j] = (dp[j] + dp[j - 1]) % 10007;
  }
}

console.log(dp[9]);