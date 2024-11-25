const fs = require("fs");
const [_, ...N] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const dp = new Array(101).fill(0);
const result = [];

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= 101; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

for (const num of N) {
  result.push(dp[num]);
}

console.log(result.join("\n"));