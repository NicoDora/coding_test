const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const m = input[1].split(" ").map(Number);
const c = input[2].split(" ").map(Number);
let sum = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  sum += c[i];
}

const dp = Array.from({ length: N + 1 }, () => Array(sum + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= sum; j++) {
    if (j - c[i - 1] >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - c[i - 1]] + m[i - 1]);
    } else dp[i][j] = dp[i - 1][j];
  }
}

for (let i = 0; i <= sum; i++) {
  if (dp[N][i] >= M) {
    result = i;
    break;
  }
}

console.log(result);