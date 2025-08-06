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

function markOuterAir() {
  const queue = new Queue();
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  queue.push([0, 0]);
  visited[0][0] = true;
  map[0][0] = -1;

  while (queue.size) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= M ||
        visited[nx][ny] ||
        map[nx][ny] === 1
      ) {
        continue;
      }

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      map[nx][ny] = -1;
    }
  }
}

function isMelt(x, y) {
  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (map[nx][ny] === -1) return true;
  }

  return false;
}

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let totalCheese = 0;
let lastCheeseCount = 0;
let time = 0;

for (let i = 1; i < N - 1; i++) {
  for (let j = 1; j < M - 1; j++) {
    if (map[i][j] === 1) totalCheese++;
  }
}

while (totalCheese) {
  const melt = [];
  let meltCheeseCount = 0;

  markOuterAir();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1 && isMelt(i, j)) {
        meltCheeseCount++;
        melt.push([i, j]);
      }
    }
  }

  for (const [x, y] of melt) {
    map[x][y] = -1;
    totalCheese--;
  }

  time++;
  lastCheeseCount = meltCheeseCount;
}

console.log(`${time}\n${lastCheeseCount}`);