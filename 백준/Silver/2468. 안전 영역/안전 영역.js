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

function bfs(i, j, depth, visited) {
  const queue = new Queue();

  queue.push([i, j]);
  visited[i][j] = true;

  while (queue.size) {
    const [x, y] = queue.pop();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= N ||
        area[nx][ny] <= depth ||
        visited[nx][ny]
      )
        continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

const N = Number(input[0]);
const area = input.slice(1).map((row) => row.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let max = 0;
let result = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (area[i][j] > max) max = area[i][j];
  }
}

for (let depth = 1; depth < max; depth++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let safeCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (area[i][j] > depth && !visited[i][j]) {
        bfs(i, j, depth, visited);
        safeCount++;
      }
    }
  }

  if (safeCount > result) result = safeCount;
}

console.log(result);