const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const array = input[1].split(" ").map(Number);
const MAX = 80000;
const dp = Array(MAX + 1).fill(0);
const result = [];

for (let i = 1; i <= MAX; i++) {
  dp[i] = dp[i - 1];
  if (i % 3 === 0 || i % 7 === 0) dp[i] += i;
}

for (let i = 0; i < T; i++) {
  result.push(dp[array[i]]);
}

console.log(result.join("\n"));