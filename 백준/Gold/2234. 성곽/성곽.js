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

function bfs(i, j, roomNumber) {
  let roomSize = 1;

  queue.push([i, j]);
  visited[i][j] = roomNumber;

  while (queue.size) {
    const [x, y] = queue.pop();

    for (let k = 0; k < 4; k++) {
      if (map[x][y][k] === "1") continue;

      const nx = x + directions[k][0];
      const ny = y + directions[k][1];

      if (nx < 0 || nx >= M || ny < 0 || ny >= N || visited[nx][ny] !== -1)
        continue;

      queue.push([nx, ny]);
      visited[nx][ny] = roomNumber;
      roomSize++;
    }
  }

  return roomSize;
}

const [N, M] = input[0].split(" ").map(Number);
const map = input
  .slice(1)
  .map((row) =>
    row.split(" ").map((n) => Number(n).toString(2).padStart(4, "0"))
  );
const queue = new Queue();
const visited = Array.from({ length: M }, () => Array(N).fill(-1));
const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const roomSizes = [];
let roomCount = 0;
let roomNumber = 0;
let maxSizeWhenBroken = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === -1) {
      roomSizes[roomNumber] = bfs(i, j, roomNumber);
      roomCount++;
      roomNumber++;
    }
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    // 동쪽
    if (
      j < N - 1 &&
      map[i][j][1] === "1" &&
      visited[i][j] !== visited[i][j + 1]
    ) {
      maxSizeWhenBroken = Math.max(
        maxSizeWhenBroken,
        roomSizes[visited[i][j]] + roomSizes[visited[i][j + 1]]
      );
    }

    // 남쪽
    if (
      i < M - 1 &&
      map[i][j][0] === "1" &&
      visited[i][j] !== visited[i + 1][j]
    ) {
      maxSizeWhenBroken = Math.max(
        maxSizeWhenBroken,
        roomSizes[visited[i][j]] + roomSizes[visited[i + 1][j]]
      );
    }
  }
}

console.log(
  roomCount + "\n" + Math.max(...roomSizes) + "\n" + maxSizeWhenBroken
);