const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const K = Number(input[index++]);
  const files = input[index++].split(" ").map(Number);
  const prefix = Array(K + 1).fill(0);
  const dp = Array.from({ length: K }, () => Array(K).fill(0));

  for (let i = 0; i < K; i++) {
    prefix[i + 1] = prefix[i] + files[i];
  }

  for (let len = 2; len <= K; len++) {
    for (let i = 0; i <= K - len; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + (prefix[j + 1] - prefix[i])
        );
      }
    }
  }

  result.push(dp[0][K - 1]);
}

console.log(result.join("\n"));