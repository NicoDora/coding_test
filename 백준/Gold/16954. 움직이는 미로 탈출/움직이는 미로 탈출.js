const fs = require("fs");
const board = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map((row) => row.split(""));

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

function moveWall() {
  let current = initialWall;

  for (let t = 0; t < 7; t++) {
    const next = [];

    for (const [x, y] of current) {
      if (x + 1 > 7) continue;

      wall[x + 1][y][t + 1] = true;
      next.push([x + 1, y]);
    }

    current = next;
  }
}

function moveUkJe() {
  while (queue.size) {
    const [x, y, t] = queue.pop();

    if ((x === 0 && y === 7) || t > 7) {
      result = 1;
      break;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      const nt = t + 1;

      if (
        nx < 0 ||
        nx > 7 ||
        ny < 0 ||
        ny > 7 ||
        visited[nx][ny][nt] ||
        wall[nx][ny][t] ||
        wall[nx][ny][nt]
      )
        continue;

      queue.push([nx, ny, nt]);
      visited[nx][ny][nt] = true;
    }
  }
}

// [x좌표, y좌표, t초]
const queue = new Queue();
const visited = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, () => Array(8).fill(false))
);
const wall = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, () => Array(8).fill(false))
);
const initialWall = [];
const directions = [
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 0],
];
let result = 0;

queue.push([7, 0, 0]);
visited[7][0][0] = true;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (board[i][j] === "#") {
      wall[i][j][0] = true;
      initialWall.push([i, j, 0]);
    }
  }
}

moveWall();
moveUkJe();

console.log(result);