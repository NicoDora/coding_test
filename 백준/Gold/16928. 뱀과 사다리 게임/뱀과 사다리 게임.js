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

  for (const num of [1, 2, 3, 4, 5, 6]) {
    let next = prev + num;

    if (next > 100) continue;
    if (board[next]) next = board[next];
    if (!visited[next]) {
      queue.push([next, count + 1]);
      visited[next] = true;
    }
  }
}