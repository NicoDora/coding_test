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

function bfs(i, j, visited) {
  const queue = new Queue();
  const union = [];
  let totalPopulation = 0;

  queue.push([i, j]);
  union.push([i, j]);
  visited[i][j] = true;
  totalPopulation += country[i][j];

  while (queue.size) {
    const [x, y] = queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + directions[k][0];
      const ny = y + directions[k][1];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        Math.abs(country[x][y] - country[nx][ny]) >= L &&
        Math.abs(country[x][y] - country[nx][ny]) <= R
      ) {
        queue.push([nx, ny]);
        union.push([nx, ny]);
        visited[nx][ny] = true;
        totalPopulation += country[nx][ny];
      }
    }
  }

  return [union, totalPopulation];
}

const [N, L, R] = input[0].split(" ").map(Number);
const country = input.slice(1).map((row) => row.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let days = 0;

while (true) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let moved = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;

      const [union, totalPopulation] = bfs(i, j, visited);

      if (union.length > 1) {
        const avg = Math.floor(totalPopulation / union.length);

        for (const [x, y] of union) {
          country[x][y] = avg;
        }

        moved = true;
      }
    }
  }

  if (!moved) break;
  days++;
}

console.log(days);