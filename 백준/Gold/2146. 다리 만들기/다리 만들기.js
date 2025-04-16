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

function floodFill(i, j, id) {
  const queue = new Queue();

  queue.push([i, j]);
  map[i][j] = id;

  while (queue.size) {
    const [x, y] = queue.pop();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1) {
        queue.push([nx, ny]);
        map[nx][ny] = id;
      }
    }
  }
}

function findShortestBridge(startId) {
  const queue = new Queue();
  const distance = Array.from({ length: N }, () => Array(N).fill(-1));

  // 시작 섬을 큐에 추가
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === startId) {
        queue.push([i, j]);
        distance[i][j] = 0;
      }
    }
  }

  while (queue.size) {
    const [x, y] = queue.pop();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      // 아직 방문하지 않은 바다인 경우
      if (distance[nx][ny] === -1 && map[nx][ny] === 0) {
        distance[nx][ny] = distance[x][y] + 1;
        queue.push([nx, ny]);
        // 다른 섬에 도달한 경우
      } else if (map[nx][ny] !== 0 && map[nx][ny] !== startId) {
        return distance[x][y];
      }
    }
  }
}

const N = Number(input[0]);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let islandId = 2;
let result = Infinity;

// 섬 구분
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) floodFill(i, j, islandId++);
  }
}

// 각 섬에서 설치 가능한 다리의 최소 길이 구하기
for (let id = 2; id < islandId; id++) {
  result = Math.min(result, findShortestBridge(id));
}

console.log(result);