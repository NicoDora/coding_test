const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function bfs(x, y, groupId) {
  const queue = [[x, y]];
  let size = 1;

  groupMap[x][y] = groupId;

  for (let i = 0; i < queue.length; i++) {
    const [qx, qy] = queue[i];

    for (let j = 0; j < 4; j++) {
      const nx = qx + dx[j];
      const ny = qy + dy[j];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        map[nx][ny] === 0 &&
        groupMap[nx][ny] === -1
      ) {
        groupMap[nx][ny] = groupId;
        queue.push([nx, ny]);
        size++;
      }
    }
  }

  groupSize[groupId] = size;
}

function getCount(x, y) {
  const visited = [];
  let count = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
      const group = groupMap[nx][ny];

      if (!visited[group]) {
        count += groupSize[group];
        visited[group] = true;
      }
    }
  }

  return count % 10;
}

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split("").map(Number));
const groupMap = Array.from({ length: N }, () => Array(M).fill(-1));
const groupSize = [];
const resultMap = Array.from({ length: N }, () => Array(M).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const wall = [];
let groupId = 0;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (map[x][y] === 0 && groupMap[x][y] === -1) bfs(x, y, groupId++);
    else if (map[x][y] === 1) wall.push([x, y]);
  }
}

for (let i = 0; i < wall.length; i++) {
  const [x, y] = wall[i];
  resultMap[x][y] = getCount(x, y);
}

console.log(resultMap.map((row) => row.join("")).join("\n"));