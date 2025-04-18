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

function countIcebergs(meltAmount) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0 && !visited[i][j]) {
        bfs(i, j, visited, meltAmount);
        count++;
      }
    }
  }

  return count;
}

function bfs(i, j, visited, meltAmount) {
  const queue = new Queue();

  queue.push([i, j]);
  visited[i][j] = true;

  while (queue.size) {
    const [x, y] = queue.pop();
    let countOcean = 0;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (map[nx][ny] !== 0 && !visited[nx][ny]) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      } else if (map[nx][ny] === 0) countOcean++;
    }

    meltAmount[x][y] = countOcean;
  }
}

function meltIceberg(meltAmount) {
  let hasIceberg = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0) {
        map[i][j] = Math.max(0, map[i][j] - meltAmount[i][j]);
        if (map[i][j] > 0) hasIceberg = true;
      }
    }
  }

  return hasIceberg;
}

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let year = 0;
let separate = false;

while (true) {
  const meltAmount = Array.from({ length: N }, () => Array(M).fill(0));
  const icebergCount = countIcebergs(meltAmount);

  if (icebergCount > 1) {
    separate = true;
    break;
  }

  if (icebergCount === 0) break;

  const hasIceberg = meltIceberg(meltAmount);

  if (!hasIceberg) break;

  year++;
}

console.log(separate ? year : 0);