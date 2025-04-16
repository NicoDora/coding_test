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

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (map[nx][ny] === 1) {
        queue.push([nx, ny]);
        map[nx][ny] = id;
      } else if (map[nx][ny] === 0) edge.push([x, y, id]);
    }
  }
}

const N = Number(input[0]);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const distance = Array.from({ length: N }, () => Array(N).fill(0));
const edge = new Queue();
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
    if (map[i][j] === 1 && !visited[i][j]) floodFill(i, j, islandId++);
  }
}

// 각 섬의 edge에서 설치 가능한 다리의 최소 길이 구하기
while (edge.size) {
  const [x, y, id] = edge.pop();

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

    // 바다인 경우
    if (map[nx][ny] === 0) {
      edge.push([nx, ny, id]);
      map[nx][ny] = id;
      distance[nx][ny] = distance[x][y] + 1;
      // 다른 섬에 도달한 경우
    } else if (map[nx][ny] !== id) {
      result = Math.min(result, distance[nx][ny] + distance[x][y]);
    }
  }
}

console.log(result);