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
  let countHome = 1;

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
        !map[nx][ny] ||
        visited[nx][ny]
      )
        continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      countHome++;
    }
  }

  return countHome;
}

const N = Number(input[0]);
const map = input.slice(1).map((row) => row.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const countHome = [];
let countDanJi = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] && !visited[i][j]) {
      countHome.push(bfs(i, j));
      countDanJi++;
    }
  }
}

console.log(countDanJi + "\n" + countHome.sort((a, b) => a - b).join("\n"));