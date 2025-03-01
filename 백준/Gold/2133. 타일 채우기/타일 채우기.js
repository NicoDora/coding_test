const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

if (N % 2 !== 0) console.log(0);
else {
  const dp = Array(N + 1).fill(0);

  dp[2] = 3;

  for (let i = 4; i <= N; i += 2) {
    dp[i] += dp[i - 2] * 3;

    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }

    dp[i] += 2;
  }

  console.log(dp[N]);
}