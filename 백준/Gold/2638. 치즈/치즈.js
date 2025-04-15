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

function resetEmptyPlace() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] !== 1) map[i][j] = 0;
    }
  }
}

function checkOutside() {
  const queue = new Queue();

  map[0][0] = 2;
  queue.push([0, 0]);

  while (queue.size) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + directions[i][0];
      const ny = y + directions[i][1];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || map[nx][ny] !== 0) continue;

      map[nx][ny] = 2;
      queue.push([nx, ny]);
    }
  }
}

function findCheeses() {
  const cheeses = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) cheeses.push([i, j]);
    }
  }

  return cheeses;
}

function meltingCheese(cheeses) {
  const melt = [];

  for (const [x, y] of cheeses) {
    let count = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + directions[i][0];
      const ny = y + directions[i][1];
      if (map[nx][ny] === 2) count++;
    }

    if (count >= 2) melt.push([x, y]);
  }

  for (const [x, y] of melt) {
    map[x][y] = 0;
  }
}

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let time = 0;

while (true) {
  resetEmptyPlace();
  checkOutside();
  const cheeses = findCheeses();

  if (!cheeses.length) break;

  meltingCheese(cheeses);

  time++;
}

console.log(time);