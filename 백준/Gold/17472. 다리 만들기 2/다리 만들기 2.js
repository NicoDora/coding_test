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

function setIsland(i, j, index) {
  const queue = new Queue();

  queue.push([i, j]);
  visited[i][j] = true;
  islands[i][j] = index;

  while (queue.size) {
    const [x, y] = queue.pop();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= M ||
        islands[nx][ny] === 0 ||
        visited[nx][ny]
      ) {
        continue;
      }

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      islands[nx][ny] = index;
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
const islands = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let index = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (islands[i][j] === 1 && !visited[i][j]) setIsland(i, j, index++);
  }
}

const islandEdge = Array.from({ length: index }, () => []);

for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (!islands[x][y]) continue;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || islands[nx][ny]) continue;

      islandEdge[islands[x][y]].push([x, y]);
      break;
    }
  }
}

const edges = [];

for (let i = 1; i < index; i++) {
  const cells = islandEdge[i];

  for (const [cx, cy] of cells) {
    for (const [dx, dy] of directions) {
      let length = 0;
      let x = cx + dx;
      let y = cy + dy;

      while (x >= 0 && x < N && y >= 0 && y < M && islands[x][y] === 0) {
        length++;
        x += dx;
        y += dy;
      }

      if (x < 0 || x >= N || y < 0 || y >= M || islands[x][y] === i) continue;

      if (length >= 2) edges.push([i, islands[x][y], length]);
    }
  }
}

edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: index }, (_, i) => i);
const rank = Array(index).fill(0);
let mstWeight = 0;
let mstEdgeCount = 0;

for (const [node1, node2, weight] of edges) {
  if (union(node1, node2)) {
    mstWeight += weight;
    mstEdgeCount++;

    if (mstEdgeCount === index - 2) break;
  }
}

console.log(mstEdgeCount === index - 2 ? mstWeight : -1);