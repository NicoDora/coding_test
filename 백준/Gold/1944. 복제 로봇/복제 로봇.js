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

function bfs(i, j, index) {
  const queue = new Queue();
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  queue.push([i, j, 0]);
  visited[i][j] = true;

  while (queue.size) {
    const [x, y, dist] = queue.pop();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      const nextDist = dist + 1;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= N ||
        visited[nx][ny] ||
        maze[nx][ny] === "1"
      ) {
        continue;
      }

      if (maze[nx][ny] === "S" || maze[nx][ny] === "K") {
        const nextIndex = coord2idx.get(`${nx},${ny}`);
        edges.push([index, nextIndex, nextDist]);
      }

      queue.push([nx, ny, nextDist]);
      visited[nx][ny] = true;
    }
  }
}

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node]));
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if (root1 === root2) return false;

  if (rank[root1] > rank[root2]) parent[root2] = root1;
  else {
    parent[root1] = root2;
    if (rank[root1] === rank[root2]) rank[root2]++;
  }

  return true;
}

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((row) => row.split(""));
const nodes = {};
const coord2idx = new Map();
const edges = [];
const parent = Array.from({ length: M + 2 }, (_, i) => i);
const rank = Array(M + 2).fill(0);
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let index = 1;
let mstWeight = 0;
let mstEdgeCount = 0;

// S와 K의 좌표 구하기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (maze[i][j] === "S" || maze[i][j] === "K") {
      nodes[index] = [i, j];
      coord2idx.set(`${i},${j}`, index++);
    }
  }
}

// 정점에 대한 간선 구하기
for (const index of Object.keys(nodes)) {
  const [x, y] = nodes[index];
  bfs(x, y, Number(index));
}

edges.sort((a, b) => a[2] - b[2]);

// 크루스칼 알고리즘
for (const [node1, node2, weight] of edges) {
  if (union(node1, node2)) {
    mstWeight += weight;
    mstEdgeCount++;

    if (mstEdgeCount === M) break;
  }
}

console.log(mstEdgeCount === M ? mstWeight : -1);