const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const home = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => Array(3).fill(0))
);

dp[1][2][0] = 1;

for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    if (home[x - 1][y - 1] === 1) continue;

    if (y > 1) dp[x][y][0] += dp[x][y - 1][0] + dp[x][y - 1][2];
    if (x > 1) dp[x][y][1] += dp[x - 1][y][1] + dp[x - 1][y][2];
    if (
      x > 1 &&
      y > 1 &&
      home[x - 2][y - 1] === 0 &&
      home[x - 1][y - 2] === 0
    ) {
      dp[x][y][2] +=
        dp[x - 1][y - 1][0] + dp[x - 1][y - 1][1] + dp[x - 1][y - 1][2];
    }
  }
}

console.log(dp[N][N][0] + dp[N][N][1] + dp[N][N][2]);