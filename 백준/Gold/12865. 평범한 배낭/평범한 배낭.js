const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const dp = Array(K + 1).fill(0);
const objects = [];

// 물건에 대한 배열 [무게, 가치]
for (let i = 1; i <= N; i++) {
  objects.push(input[i].split(" ").map(Number));
}

for (const [W, V] of objects) {
  for (let i = K; i >= W; i--) {
    dp[i] = Math.max(dp[i], dp[i - W] + V);
  }
}

console.log(dp[K]);