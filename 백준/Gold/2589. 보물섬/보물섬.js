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
    if (this.size === 0) return null;

    const data = this.front.data;

    this.front = this.front.next;
    this.size--;

    return data;
  }
}

function bfs(i, j) {
  const queue = new Queue();
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  queue.push([i, j, 0]);
  visited[i][j] = true;

  while (queue.size) {
    const [x, y, dist] = queue.pop();

    if (maxDist < dist) maxDist = dist;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= M ||
        map[nx][ny] !== "L" ||
        visited[nx][ny]
      ) {
        continue;
      }

      queue.push([nx, ny, dist + 1]);
      visited[nx][ny] = true;
    }
  }
}

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(""));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let maxDist = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "L") bfs(i, j);
  }
}

console.log(maxDist);