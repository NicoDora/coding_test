const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [M, N, H] = input[0].split(" ").map(Number);
const graph = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => [])
);

// graph 초기화
for (let i = 0, h = 0; i < N * H; i += N, h++) {
  for (let x = 0; x < N; x++) {
    graph[h][x] = input[i + x + 1].split(" ");
  }
}

// [h, x, y]
const directions = [
  [0, 0, 1],
  [0, 1, 0],
  [0, 0, -1],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];
// [h, x, y, day]
const queue = [];

// 익은 토마토 확인
for (let h = 0; h < H; h++) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[h][x][y] === "1") queue.push([h, x, y, 0]);
    }
  }
}

let frontIndex = 0;
let maxDay = 0;

// bfs
while (frontIndex < queue.length) {
  const [h, x, y, day] = queue[frontIndex++];
  maxDay = Math.max(maxDay, day);

  for (const [dh, dx, dy] of directions) {
    const nh = h + dh;
    const nx = x + dx;
    const ny = y + dy;

    if (
      nh >= 0 &&
      nh < H &&
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      graph[nh][nx][ny] === "0"
    ) {
      graph[nh][nx][ny] = "1";
      queue.push([nh, nx, ny, day + 1]);
    }
  }
}

// 안익은 토마토 확인
for (let h = 0; h < H; h++) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (graph[h][x][y] === "0") {
        maxDay = -1;
        break;
      }
    }
  }
}

console.log(maxDay);