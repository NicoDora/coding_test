const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(depth, copyOffice) {
  if (depth === cctv.length) {
    result = Math.min(result, countBlindSpot(copyOffice));
    return;
  }

  const [x, y, type] = cctv[depth];

  for (const dirs of directions[type]) {
    const newOffice = copyOffice.map((row) => [...row]);

    for (const dir of dirs) {
      watch(x, y, dir, newOffice);
    }

    dfs(depth + 1, newOffice);
  }
}

function watch(x, y, dir, office) {
  while (true) {
    x += dx[dir];
    y += dy[dir];

    if (x < 0 || x >= N || y < 0 || y >= M || office[x][y] === 6) break;
    if (office[x][y] === 0) office[x][y] = "#";
  }
}

function countBlindSpot(office) {
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (office[i][j] === 0) count++;
    }
  }

  return count;
}

const [N, M] = input[0].split(" ").map(Number);
const office = input.slice(1).map((row) => row.split(" ").map(Number));
const cctv = [];
const directions = [
  [],
  [[0], [1], [2], [3]],
  [
    [0, 2],
    [1, 3],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ],
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ],
  [[0, 1, 2, 3]],
];
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
let result = Infinity;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (office[i][j] >= 1 && office[i][j] <= 5) cctv.push([i, j, office[i][j]]);
  }
}

dfs(0, office);

console.log(result);