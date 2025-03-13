const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const data = this.front.data;

    this.front = this.front.next;
    this.size--;

    return data;
  }
}

function bfs(start, target) {
  const queue = new Queue();
  const visited = Array.from({ length: H }, () => Array(W).fill(false));
  const [sx, sy] = start;

  queue.push([sx, sy, 0]);
  visited[sx][sy] = true;

  while (queue.size) {
    const [x, y, d] = queue.pop();

    if (map[x][y] === target) return [x, y, d];

    for (let k = 0; k < 4; k++) {
      const nx = x + directions[k][0];
      const ny = y + directions[k][1];

      if (
        nx >= 0 &&
        nx < H &&
        ny >= 0 &&
        ny < W &&
        map[nx][ny] !== "X" &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, d + 1]);
      }
    }
  }
}

const [H, W, N] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(""));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let position = [0, 0];
let step = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "S") {
      position = [i, j];
      break;
    }
  }
}

for (let cheese = 1; cheese <= N; cheese++) {
  const target = String(cheese);
  const [x, y, d] = bfs(position, target);

  step += d;
  position = [x, y];
}

console.log(step);