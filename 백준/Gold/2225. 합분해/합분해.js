const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

dp[0][0] = 1;

for (let i = 1; i <= N; i++) {
  dp[i][0] = 0;
}

for (let i = 1; i <= K; i++) {
  dp[0][i] = 1;
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    for (let k = 0; k <= i; k++) {
      dp[i][j] = (dp[i][j] + dp[i - k][j - 1]) % 1000000000;
    }
  }
}

console.log(dp[N][K]);