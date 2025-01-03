const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const cost = input.slice(1).map((line) => line.split(" ").map(Number));
let minCost = Infinity;

for (let startColor = 0; startColor < 3; startColor++) {
  const dp = Array.from({ length: N }, () => [Infinity, Infinity, Infinity]);

  dp[0][startColor] = cost[0][startColor];

  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2];
  }

  for (let endColor = 0; endColor < 3; endColor++) {
    if (startColor !== endColor) {
      minCost = Math.min(minCost, dp[N - 1][endColor]);
    }
  }
}

console.log(minCost);