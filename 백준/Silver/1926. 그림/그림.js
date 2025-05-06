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
  let area = 1;

  queue.push([i, j]);
  visited[i][j] = true;

  while (queue.size) {
    const [x, y] = queue.pop();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= m ||
        canvas[nx][ny] === 0 ||
        visited[nx][ny]
      )
        continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      area++;
    }
  }

  return area;
}

const [n, m] = input[0].split(" ").map(Number);
const canvas = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let countPainting = 0;
let maxArea = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (canvas[i][j] === 1 && !visited[i][j]) {
      let area = bfs(i, j);
      if (area > maxArea) maxArea = area;
      countPainting++;
    }
  }
}

console.log(countPainting + "\n" + maxArea);