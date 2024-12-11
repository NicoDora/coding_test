const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const dp = Array.from({ length: K + 1 }, () => Array(N + 1).fill(0));
const objects = [[]];

// 물건에 대한 배열 [무게, 가치]
for (let i = 1; i <= N; i++) {
  objects.push(input[i].split(" ").map(Number));
}

for (let j = 1; j <= N; j++) {
  const [W, V] = objects[j];

  for (let i = 1; i <= K; i++) {
    if (W > i) dp[i][j] = dp[i][j - 1];
    else dp[i][j] = Math.max(dp[i][j - 1], dp[i - W][j - 1] + V);
  }
}

console.log(dp[K][N]);