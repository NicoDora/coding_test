const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((line) => line.split(" "));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
// [x, y, day]
const queue = [];

// 익은 토마토 확인
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (graph[x][y] === "1") queue.push([x, y, 0]);
  }
}

let frontIndex = 0;
let maxDay = 0;

// bfs
while (frontIndex < queue.length) {
  const [x, y, day] = queue[frontIndex++];
  maxDay = Math.max(maxDay, day);

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === "0") {
      graph[nx][ny] = "1";
      queue.push([nx, ny, day + 1]);
    }
  }
}

// 안익은 토마토 확인
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (graph[x][y] === "0") {
      maxDay = -1;
      break;
    }
  }
}

console.log(maxDay);