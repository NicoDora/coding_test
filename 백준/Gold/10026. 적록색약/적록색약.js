const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function bfs(startX, startY, color, visited, graph) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [[startX, startY]];
  let index = 0;

  visited[startX][startY] = true;

  while (queue.length > index) {
    const [x, y] = queue[index++];

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < graph.length &&
        ny >= 0 &&
        ny < graph.length &&
        !visited[nx][ny] &&
        graph[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

const N = Number(input[0]);

// 일반
const normalGraph = input.slice(1).map((line) => line.split(""));
const visitedNormal = Array.from({ length: N }, () => Array(N).fill(false));
let normalCount = 0;

// 적녹색약
const colorBlindGraph = normalGraph.map((line) =>
  line.map((color) => (color === "R" ? "G" : color))
);
const visitedColorBlind = Array.from({ length: N }, () => Array(N).fill(false));
let colorBlindCount = 0;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (!visitedNormal[x][y]) {
      bfs(x, y, normalGraph[x][y], visitedNormal, normalGraph);
      normalCount++;
    }

    if (!visitedColorBlind[x][y]) {
      bfs(x, y, colorBlindGraph[x][y], visitedColorBlind, colorBlindGraph);
      colorBlindCount++;
    }
  }
}

console.log(normalCount, colorBlindCount);