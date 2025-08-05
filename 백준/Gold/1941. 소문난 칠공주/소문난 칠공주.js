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

function dfs(start, path) {
  if (path.length === 7) {
    combinations.push([...path]);
    return;
  }

  for (let i = start; i < 25; i++) {
    path.push(i);
    dfs(i + 1, path);
    path.pop();
  }
}

function bfs(coordinateArray) {
  const queue = new Queue();
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
  const set = new Set(coordinateArray.map(([x, y]) => `${x},${y}`));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const [startX, startY] = coordinateArray[0];
  let count = 1;

  queue.push([startX, startY]);
  visited[startX][startY] = true;

  while (queue.size) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= 5 ||
        ny < 0 ||
        ny >= 5 ||
        !set.has(`${nx},${ny}`) ||
        visited[nx][ny]
      ) {
        continue;
      }

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      count++;
    }
  }

  return count === 7;
}

function indexToCoord(index) {
  return [Math.floor(index / 5), index % 5];
}

function isSevenPrincess(coordinateArray) {
  let countS = 0;
  let countY = 0;

  for (const [x, y] of coordinateArray) {
    if (map[x][y] === "S") countS++;
    else countY++;
  }

  if (countS >= 4) return true;

  return false;
}

const map = input.map((row) => row.split(""));
const combinations = [];
let count = 0;

dfs(0, []);

for (const index of combinations) {
  const coordinateArray = [];

  for (const i of index) {
    coordinateArray.push(indexToCoord(i));
  }

  if (!bfs(coordinateArray)) continue;

  if (isSevenPrincess(coordinateArray)) count++;
}

console.log(count);