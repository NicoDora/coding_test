const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function bfs(array) {
  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let count = 0;

  // 바이러스가 있는 곳 찾아서 queue에 넣기 (queue 초기값)
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (array[x][y] === 2) queue.push([x, y]);
    }
  }

  // 바이러스 퍼뜨리기
  for (let i = 0; i < queue.length; i++) {
    const [x, y] = queue[i];

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && array[nx][ny] === 0) {
        array[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  // 남은 0(빈칸) 개수 세기
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (array[x][y] === 0) count++;
    }
  }

  return count;
}

const [N, M] = input[0].split(" ").map(Number);
const lab = input.slice(1).map((line) => line.split(" ").map(Number));
const blanks = [];
let maxSafeArea = 0;

// 0(빈칸)인 영역을 모두 구함. [x, y]
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (lab[x][y] === 0) blanks.push([x, y]);
  }
}

// 브루트포스로 0(빈칸)을 1(벽)로 바꾸는 모든 경우의 수를 계산.
for (let i = 0; i < blanks.length; i++) {
  for (let j = i + 1; j < blanks.length; j++) {
    for (let k = j + 1; k < blanks.length; k++) {
      const testLab = JSON.parse(JSON.stringify(lab));
      const [x1, y1] = blanks[i];
      const [x2, y2] = blanks[j];
      const [x3, y3] = blanks[k];

      testLab[x1][y1] = 1;
      testLab[x2][y2] = 1;
      testLab[x3][y3] = 1;

      maxSafeArea = Math.max(maxSafeArea, bfs(testLab));
    }
  }
}

console.log(maxSafeArea);