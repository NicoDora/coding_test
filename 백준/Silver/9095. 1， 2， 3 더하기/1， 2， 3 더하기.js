const fs = require("fs");
const [T, ...input] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const dp = new Array(11).fill(0);
const result = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let n = 4; n < 11; n++) {
  dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3];
}

for (let i = 0; i < T; i++) {
  result.push(dp[input[i]]);
}

console.log(result.join("\n"));