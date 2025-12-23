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

  shift() {
    if (this.size === 0) return null;

    const data = this.front.data;

    this.front = this.front.next;
    this.size--;

    return data;
  }
}

function fill(startX, startY, endX, endY) {
  for (let x = startX; x < endX; x++) {
    for (let y = startY; y < endY; y++) {
      paper[x][y] = 1;
    }
  }
}

function bfs(i, j) {
  const queue = new Queue();
  let area = 1;

  queue.push([i, j]);
  paper[i][j] = 1;

  while (queue.size) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || paper[nx][ny] === 1) {
        continue;
      }

      queue.push([nx, ny]);
      paper[nx][ny] = 1;
      area++;
    }
  }

  return area;
}

const [M, N, K] = input[0].split(" ").map(Number);
const paper = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const result = [];
let count = 0;

for (let i = 1; i <= K; i++) {
  const [startX, startY, endX, endY] = input[i].split(" ").map(Number);
  fill(startX, startY, endX, endY);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (paper[i][j] === 0) {
      result.push(bfs(i, j));
      count++;
    }
  }
}

console.log(count + "\n" + result.sort((a, b) => a - b).join(" "));