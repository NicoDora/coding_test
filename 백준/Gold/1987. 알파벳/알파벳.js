const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(x, y, visited, count) {
  maxCount = Math.max(maxCount, count);

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      const charCode = board[nx][ny].charCodeAt(0) - 65;

      if ((visited & (1 << charCode)) === 0) {
        dfs(nx, ny, visited | (1 << charCode), count + 1);
      }
    }
  }
}

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let maxCount = 0;

dfs(0, 0, 1 << (board[0][0].charCodeAt(0) - 65), 1);

console.log(maxCount);