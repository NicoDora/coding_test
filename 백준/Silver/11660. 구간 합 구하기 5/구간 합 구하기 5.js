const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const matrix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const result = [];

for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    matrix[i][j] = row[j - 1];
  }
}

dp[1][1] = matrix[1][1];

for (let y = 2; y <= N; y++) {
  dp[1][y] = dp[1][y - 1] + matrix[1][y];
}

for (let x = 2; x <= N; x++) {
  dp[x][1] = dp[x - 1][1] + matrix[x][1];
}

for (let x = 2; x <= N; x++) {
  for (let y = 2; y <= N; y++) {
    dp[x][y] = matrix[x][y] + dp[x - 1][y] + dp[x][y - 1] - dp[x - 1][y - 1];
  }
}

for (let i = N + 1; i <= N + M; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  result.push(
    dp[x2][y2] -
      (y1 > 1 ? dp[x2][y1 - 1] : 0) -
      (x1 > 1 ? dp[x1 - 1][y2] : 0) +
      (x1 > 1 && y1 > 0 ? dp[x1 - 1][y1 - 1] : 0)
  );
}

console.log(result.join("\n"));