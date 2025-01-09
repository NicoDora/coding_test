const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

// 움직일 때의 비용을 구하는 함수
function moveCost(start, end) {
  if (start) {
    if (Math.abs(start - end) === 2) return 4;
    else if (start === end) return 1;
    else return 3;
  }
  return 2;
}

// dp[i][j][k] -> [i번째 지시사항, 왼발 위치, 오른발 위치] 에 대한 최소 힘
const dp = Array.from({ length: input.length }, () =>
  Array.from({ length: 5 }, () => Array(5).fill(Infinity))
);
let minCost = Infinity;

input.pop();
dp[0][0][0] = 0;

for (let i = 0; i < input.length; i++) {
  const x = input[i];

  for (let j = 0; j <= 4; j++) {
    for (let k = 0; k <= 4; k++) {
      // 왼발을 움직일 때
      dp[i + 1][x][k] = Math.min(dp[i + 1][x][k], dp[i][j][k] + moveCost(j, x));
      // 오른발을 움직일 때
      dp[i + 1][j][x] = Math.min(dp[i + 1][j][x], dp[i][j][k] + moveCost(k, x));
    }
  }
}

for (let j = 0; j <= 4; j++) {
  for (let k = 0; k <= 4; k++) {
    minCost = Math.min(minCost, dp[input.length][j][k]);
  }
}

console.log(minCost);