const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M, H] = input[0].split(" ").map(Number);
const blocks = [[], ...input.slice(1).map((row) => row.split(" ").map(Number))];
const dp = Array.from({ length: N + 1 }, () => Array(H + 1).fill(0));

for (let i = 0; i <= N; i++) {
  dp[i][0] = 1;
}

// i: i번째 학생까지, j: 높이, k: k번째 블록
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= H; j++) {
    for (let k = 0; k < blocks[i].length; k++) {
      if (blocks[i][k] <= j) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - blocks[i][k]]) % 10007;
      }
    }
    dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[N][H]);