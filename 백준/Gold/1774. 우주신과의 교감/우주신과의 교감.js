const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function calculateDistance(x1, y1, x2, y2) {
  const distX = Math.abs(x1 - x2);
  const distY = Math.abs(y1 - y2);

  return Math.sqrt(distX ** 2 + distY ** 2);
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
const coordinate = input
  .slice(1, N + 1)
  .map((row) => row.split(" ").map(Number));
const linked = input.slice(N + 1).map((row) => row.split(" ").map(Number));
const edges = [];
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
let mstWeight = 0;
let mstEdgeCount = 0;

for (const [x, y] of linked) {
  edges.push([x, y, 0]);
}

for (let i = 0; i < N - 1; i++) {
  const [x1, y1] = coordinate[i];

  for (let j = i + 1; j < N; j++) {
    const [x2, y2] = coordinate[j];
    edges.push([i + 1, j + 1, calculateDistance(x1, y1, x2, y2)]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < edges.length; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2)) {
    mstWeight += weight;
    mstEdgeCount++;

    if (mstEdgeCount === N - 1) break;
  }
}

console.log(mstWeight.toFixed(2));