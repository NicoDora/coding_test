const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [C, N] = input[0].split(" ").map(Number);
const cities = input.slice(1).map((row) => row.split(" ").map(Number));
const dp = Array(C + 101).fill(Infinity);

dp[0] = 0;

for (const [cost, customer] of cities) {
  for (let i = customer; i <= C + 100; i++) {
    dp[i] = Math.min(dp[i], dp[i - customer] + cost);
  }
}

console.log(Math.min(...dp.slice(C)));