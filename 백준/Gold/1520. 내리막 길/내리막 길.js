const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(x, y) {
  if (x === M - 1 && y === N - 1) return 1;
  if (dp[x][y] !== -1) return dp[x][y];

  dp[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < M && ny >= 0 && ny < N && map[nx][ny] < map[x][y]) {
      dp[x][y] += dfs(nx, ny);
    }
  }

  return dp[x][y];
}

const [M, N] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: M }, () => Array(N).fill(-1));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

console.log(dfs(0, 0));