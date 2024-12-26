const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = Array(101).fill(0);
const visited = Array(101).fill(false);
const queue = [[1, 0]];

for (let i = 1; i <= N + M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  board[x] = y;
}

visited[1] = true;

for (let i = 0; i < queue.length; i++) {
  const [prev, count] = queue[i];

  if (prev === 100) {
    console.log(count);
    break;
  }

  for (let n = 1; n < 7; n++) {
    let next = prev + n;

    if (next > 100) continue;
    if (board[next]) next = board[next];
    if (!visited[next]) {
      queue.push([next, count + 1]);
      visited[next] = true;
    }
  }
}