const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const campus = input.slice(1).map((row) => row.split(""));
const queue = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from({ length: N }, () => Array(M).fill(false));
let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (campus[i][j] === "I") {
      queue.push([i, j]);
      visited[i][j] = true;
      break;
    }
  }
}

for (let i = 0; i < queue.length; i++) {
  const [x, y] = queue[i];

  for (let j = 0; j < 4; j++) {
    const nx = x + dx[j];
    const ny = y + dy[j];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      campus[nx][ny] !== "X" &&
      !visited[nx][ny]
    ) {
      if (campus[nx][ny] === "P") count++;
      queue.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

console.log(count ? count : "TT");