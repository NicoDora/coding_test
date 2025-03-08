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
      jihoonQueue.push([i, j]);
      jihoonTime[i][j] = 0;
    } else if (miro[i][j] === "F") {
      fireQueue.push([i, j, 1]);
      fireTime[i][j] = 0;
    }
  }
}

while (fireQueue.size) {
  const [x, y] = fireQueue.pop();

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
      fireQueue.push([nx, ny]);
    }
  }
}

while (jihoonQueue.size) {
  const [x, y] = jihoonQueue.pop();

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
      jihoonQueue.push([nx, ny]);
    }
  }
}

console.log(result);