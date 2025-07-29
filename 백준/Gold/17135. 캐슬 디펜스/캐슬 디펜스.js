const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function calculateDistance(r1, c1, r2, c2) {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}

function getTargets(i, j, k, currentEnemies) {
  const targets = new Set();
  const archers = [i, j, k];

  // 각 궁수들이 표적으로 삼을 최적의 적 구하기
  for (const archerCol of archers) {
    let minDistance = Infinity;
    let targetIndex = -1;
    let targetCol = Infinity;

    for (let l = 0; l < currentEnemies.length; l++) {
      const [enemyRow, enemyCol] = currentEnemies[l];
      const dist = calculateDistance(N, archerCol, enemyRow, enemyCol);

      if (dist > D) continue;

      if (dist < minDistance) {
        minDistance = dist;
        targetCol = enemyCol;
        targetIndex = l;
      } else if (dist === minDistance && enemyCol < targetCol) {
        targetCol = enemyCol;
        targetIndex = l;
      }
    }

    if (targetIndex !== -1) targets.add(targetIndex);
  }

  return targets;
}

function main(i, j, k) {
  let currentEnemies = enemies.map((e) => [...e]);
  let killedCount = 0;

  // 적이 모두 없어질 때 까지
  while (currentEnemies.length > 0) {
    const targets = getTargets(i, j, k, currentEnemies);

    // 타겟 제거
    currentEnemies = currentEnemies.filter((_, index) => !targets.has(index));

    // 적 위치 이동
    currentEnemies = currentEnemies
      .map(([r, c]) => [r + 1, c])
      .filter(([r, _]) => r < N);

    // 킬 수 증가
    killedCount += targets.size;
  }

  // 최대 킬 수 갱신
  maxKilled = Math.max(maxKilled, killedCount);
}

const [N, M, D] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
const enemies = [];
let maxKilled = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) enemies.push([i, j]);
  }
}

// 궁수의 위치 브루트포스
for (let i = 0; i < M - 2; i++) {
  for (let j = i + 1; j < M - 1; j++) {
    for (let k = j + 1; k < M; k++) {
      main(i, j, k);
    }
  }
}

console.log(maxKilled);