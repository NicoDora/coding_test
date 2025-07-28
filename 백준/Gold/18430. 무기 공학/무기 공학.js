const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(x, y, currentStrength) {
  if (x === N) {
    if (maxStrength < currentStrength) maxStrength = currentStrength;
    return;
  }

  let nx = x;
  let ny = y + 1;

  if (ny === M) {
    nx = x + 1;
    ny = 0;
  }

  dfs(nx, ny, currentStrength);

  if (visited[x][y]) return;

  for (const [[dx1, dy1], [dx2, dy2]] of shapes) {
    const nx1 = x + dx1;
    const ny1 = y + dy1;
    const nx2 = x + dx2;
    const ny2 = y + dy2;

    if (
      nx1 < 0 ||
      nx1 >= N ||
      ny1 < 0 ||
      ny1 >= M ||
      nx2 < 0 ||
      nx2 >= N ||
      ny2 < 0 ||
      ny2 >= M ||
      visited[nx1][ny1] ||
      visited[nx2][ny2]
    ) {
      continue;
    }

    const nextStrength =
      currentStrength + wood[x][y] * 2 + wood[nx1][ny1] + wood[nx2][ny2];

    visited[x][y] = true;
    visited[nx1][ny1] = true;
    visited[nx2][ny2] = true;

    dfs(nx, ny, nextStrength);

    visited[x][y] = false;
    visited[nx1][ny1] = false;
    visited[nx2][ny2] = false;
  }
}

const [N, M] = input[0].split(" ").map(Number);
const wood = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const shapes = [
  [
    [0, 1],
    [1, 0],
  ],
  [
    [0, -1],
    [1, 0],
  ],
  [
    [0, -1],
    [-1, 0],
  ],
  [
    [0, 1],
    [-1, 0],
  ],
];
let maxStrength = 0;

dfs(0, 0, 0);

console.log(maxStrength);