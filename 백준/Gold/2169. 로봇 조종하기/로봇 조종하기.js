const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const mars = input.slice(1).map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => Array(3).fill(-Infinity))
);

// dp[i][j][k]: (i, j) 좌표에 k(0: 왼쪽, 1: 오른쪽, 2: 아래) 방향으로 도착했을 때의 최대값

dp[1][1][0] = mars[0][0];
dp[1][1][1] = mars[0][0];
dp[1][1][2] = mars[0][0];

for (let i = 1; i <= N; i++) {
  // 위에서 아래 방향
  if (i > 1) {
    for (let j = 1; j <= M; j++) {
      dp[i][j][2] =
        Math.max(dp[i - 1][j][0], dp[i - 1][j][1], dp[i - 1][j][2]) +
        mars[i - 1][j - 1];
    }
  }

  // 왼쪽에서 오른쪽 방향
  for (let j = 1; j <= M; j++) {
    if (j === 1) {
      dp[i][j][0] = dp[i][j][2];
    } else {
      dp[i][j][0] =
        Math.max(dp[i][j - 1][0], dp[i][j - 1][2]) + mars[i - 1][j - 1];
    }
  }

  // 오른쪽에서 왼쪽 방향
  for (let j = M; j >= 1; j--) {
    if (j === M) {
      dp[i][j][1] = dp[i][j][2];
    } else {
      dp[i][j][1] =
        Math.max(dp[i][j + 1][1], dp[i][j + 1][2]) + mars[i - 1][j - 1];
    }
  }
}

console.log(Math.max(...dp[N][M]));