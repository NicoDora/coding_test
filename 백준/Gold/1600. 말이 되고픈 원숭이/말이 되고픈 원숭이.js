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

function bfs() {
  while (queue.size) {
    const [h, x, y] = queue.pop();
    const dist = visited[h][x][y];
    const nh = h + 1;

    if (x === H - 1 && y === W - 1) return dist;

    // 인접 이동
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= H ||
        ny < 0 ||
        ny >= W ||
        map[nx][ny] === 1 ||
        visited[h][nx][ny] !== -1
      )
        continue;

      queue.push([h, nx, ny]);
      visited[h][nx][ny] = dist + 1;
    }

    if (h >= K) continue;

    // 말 처럼 이동
    for (const [hx, hy] of horse) {
      const nx = x + hx;
      const ny = y + hy;

      if (
        nx < 0 ||
        nx >= H ||
        ny < 0 ||
        ny >= W ||
        map[nx][ny] === 1 ||
        visited[nh][nx][ny] !== -1
      )
        continue;

      queue.push([nh, nx, ny]);
      visited[nh][nx][ny] = dist + 1;
    }
  }

  return -1;
}

const K = Number(input[0]);
const [W, H] = input[1].split(" ").map(Number);
const map = input.slice(2).map((row) => row.split(" ").map(Number));
// queue, visited: [말 처럼 움직인 횟수, x좌표, y좌표]
const queue = new Queue();
const visited = Array.from({ length: K + 1 }, () =>
  Array.from({ length: H }, () => Array(W).fill(-1))
);
const horse = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

queue.push([0, 0, 0]);
visited[0][0][0] = 0;

console.log(bfs());