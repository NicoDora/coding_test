const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let i = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[i++]);
  const coins = input[i++].split(" ").map(Number);
  const M = Number(input[i++]);
  const dp = Array(M + 1).fill(0);

  dp[0] = 1;

  for (const coin of coins) {
    for (let j = coin; j <= M; j++) {
      dp[j] += dp[j - coin];
    }
  }

  result.push(dp[M]);
}

console.log(result.join("\n"));