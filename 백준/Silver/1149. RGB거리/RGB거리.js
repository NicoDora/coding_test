const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const dp = Array.from({ length: N + 1 }, () => []);
const cost = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= N; i++) {
  const [r, g, b] = input[i].split(" ").map(Number);
  cost[i].push(r, g, b);
}

dp[1].push(cost[1][0], cost[1][1], cost[1][2]);

let current = 0;
let before = 1;

for (let i = 2; i <= N; i++) {
  if (i % 2 !== 0) {
    current = 1;
    before = 0;
  } else {
    current = 0;
    before = 1;
  }

  dp[current][0] = Math.min(dp[before][1], dp[before][2]) + cost[i][0];
  dp[current][1] = Math.min(dp[before][0], dp[before][2]) + cost[i][1];
  dp[current][2] = Math.min(dp[before][0], dp[before][1]) + cost[i][2];
}

if (N % 2 === 0) console.log(Math.min(dp[0][0], dp[0][1], dp[0][2]));
else console.log(Math.min(dp[1][0], dp[1][1], dp[1][2]));