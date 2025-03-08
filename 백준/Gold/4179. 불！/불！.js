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
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }

    this.rear = newNode;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const removedData = this.front.data;
    this.front = this.front.next;

    if (!this.front) this.rear = null;

    return removedData;
  }
}

const [R, C] = input[0].split(" ").map(Number);
const miro = input.slice(1).map((row) => row.split(""));
const jihoonQueue = new Queue();
const fireQueue = new Queue();
const jihoonTime = Array.from({ length: R }, () => Array(C).fill(Infinity));
const fireTime = Array.from({ length: R }, () => Array(C).fill(Infinity));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let result = "IMPOSSIBLE";

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (miro[i][j] === "J") {
      jihoonQueue.enqueue([i, j]);
      jihoonTime[i][j] = 0;
    } else if (miro[i][j] === "F") {
      fireQueue.enqueue([i, j, 1]);
      fireTime[i][j] = 0;
    }
  }
}

while (!fireQueue.isEmpty()) {
  const [x, y] = fireQueue.dequeue();

  for (let k = 0; k < 4; k++) {
    const nx = x + directions[k][0];
    const ny = y + directions[k][1];

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      miro[nx][ny] !== "#" &&
      fireTime[nx][ny] === Infinity
    ) {
      fireTime[nx][ny] = fireTime[x][y] + 1;
      fireQueue.enqueue([nx, ny]);
    }
  }
}

while (!jihoonQueue.isEmpty()) {
  const [x, y] = jihoonQueue.dequeue();

  if (x === 0 || x === R - 1 || y === 0 || y === C - 1) {
    result = jihoonTime[x][y] + 1;
    break;
  }

  for (let k = 0; k < 4; k++) {
    const nx = x + directions[k][0];
    const ny = y + directions[k][1];

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      miro[nx][ny] !== "#" &&
      jihoonTime[nx][ny] === Infinity &&
      jihoonTime[x][y] + 1 < fireTime[nx][ny]
    ) {
      jihoonTime[nx][ny] = jihoonTime[x][y] + 1;
      jihoonQueue.enqueue([nx, ny]);
    }
  }
}

console.log(result);