const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];

for (let i = 1; i < T * 3; i += 3) {
  const n = Number(input[i]);
  const dp = Array.from({ length: 2 }, () => []);
  const stickers = [];

  stickers.push(
    input[i + 1].split(" ").map(Number),
    input[i + 2].split(" ").map(Number)
  );

  dp[0][0] = stickers[0][0];
  dp[1][0] = stickers[1][0];
  dp[0][1] = stickers[0][1] + dp[1][0];
  dp[1][1] = stickers[1][1] + dp[0][0];

  for (let j = 2; j < n; j++) {
    dp[0][j] =
      Math.max(dp[0][j - 2], dp[1][j - 1], dp[1][j - 2]) + stickers[0][j];
    dp[1][j] =
      Math.max(dp[1][j - 2], dp[0][j - 1], dp[0][j - 2]) + stickers[1][j];
  }

  result.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
}

console.log(result.join("\n"));