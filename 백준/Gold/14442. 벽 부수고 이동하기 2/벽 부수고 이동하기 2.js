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

const [N, M, K] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split("").map(Number));
const queue = new Queue();
const destroy = Array.from({ length: N }, () => new Uint8Array(M).fill(255));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let result = -1;

// queue: [x, y, 부순 벽의 개수, 거리]
queue.push([0, 0, 0, 1]);
destroy[0][0] = 1;

while (queue.size) {
  const [x, y, z, dist] = queue.pop();

  if (x === N - 1 && y === M - 1) {
    result = dist;
    break;
  }

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (map[nx][ny] === 0 && z < destroy[nx][ny]) {
      destroy[nx][ny] = z;
      queue.push([nx, ny, z, dist + 1]);
    } else if (z < K && z + 1 < destroy[nx][ny]) {
      destroy[nx][ny] = z + 1;
      queue.push([nx, ny, z + 1, dist + 1]);
    }
  }
}

console.log(result);