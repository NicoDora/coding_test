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

const [R, C] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(""));
const queue = new Queue();
const visited = Array.from({ length: R }, () => Array(C).fill(false));
const waterQueue = new Queue();
const waterTime = Array.from({ length: R }, () => Array(C).fill(Infinity));
const waterVisited = Array.from({ length: R }, () => Array(C).fill(false));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let goalX, goalY;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] === "S") queue.push([i, j, 0]);
    else if (map[i][j] === "D") [goalX, goalY] = [i, j];
    else if (map[i][j] === "*") {
      waterQueue.push([i, j, 0]);
      waterTime[i][j] = 0;
    }
  }
}

while (waterQueue.size) {
  const [x, y, time] = waterQueue.pop();

  if (waterVisited[x][y]) continue;

  waterTime[x][y] = time;
  waterVisited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + directions[i][0];
    const ny = y + directions[i][1];

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      map[nx][ny] === "." &&
      !waterVisited[nx][ny]
    ) {
      waterQueue.push([nx, ny, time + 1]);
    }
  }
}

while (queue.size) {
  const [x, y, time] = queue.pop();

  if (visited[x][y]) continue;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + directions[i][0];
    const ny = y + directions[i][1];

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      (map[nx][ny] === "." || map[nx][ny] === "D") &&
      !visited[nx][ny] &&
      time + 1 < waterTime[nx][ny]
    ) {
      if (nx === goalX && ny === goalY) {
        console.log(time + 1);
        return;
      }

      queue.push([nx, ny, time + 1]);
    }
  }
}

console.log("KAKTUS");