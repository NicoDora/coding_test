const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number);

const T = input[0];
const dp = new Array(41).fill(0);
const dp0 = new Array(41).fill(0);
const dp1 = new Array(41).fill(0);
const result = [];

dp[0] = 0;
dp[1] = 1;
dp0[0] = 1;
dp1[1] = 1;

for (let i = 2; i <= 40; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
  dp0[i] = dp0[i - 1] + dp0[i - 2];
  dp1[i] = dp1[i - 1] + dp1[i - 2];
}

for (let i = 1; i <= T; i++) {
  const n = input[i];
  result.push(`${dp0[n]} ${dp1[n]}`);
}

console.log(result.join("\n"));