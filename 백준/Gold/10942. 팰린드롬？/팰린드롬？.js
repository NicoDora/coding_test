const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const M = Number(input[2]);
const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const result = [];

for (let i = 1; i <= N; i++) dp[i][i] = 1;

for (let i = 1; i < N; i++) {
  if (array[i - 1] === array[i]) dp[i][i + 1] = 1;
}

for (let length = 2; length < N; length++) {
  for (let i = 1; i <= N - length; i++) {
    const j = i + length;
    if (array[i - 1] === array[j - 1] && dp[i + 1][j - 1] === 1) {
      dp[i][j] = 1;
    }
  }
}

for (let i = 3; i < M + 3; i++) {
  const [S, E] = input[i].split(" ").map(Number);
  result.push(dp[S][E]);
}

console.log(result.join("\n"));