const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());

const dp = new Array(n + 1).fill(Infinity);
const square = [];

dp[0] = 0;

for (let i = 1; i <= Math.sqrt(n); i++) {
  square.push(i ** 2);
}

for (let i = 1; i <= n; i++) {
  for (const k of square) {
    if (i < k) break;
    dp[i] = Math.min(dp[i], dp[i - k] + 1);
  }
}

console.log(dp[n]);