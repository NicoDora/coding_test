const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

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

const [n, m] = input[0].split(" ").map(Number);
const matrix = input.slice(m + 1).map((row) => row.split(" ").map(Number));
const edges = [];
const parent = Array.from({ length: n + 1 }, (_, i) => i);
const rank = Array(n + 1).fill(0);
const newConnections = [];
let mstWeight = 0;
let newEdgeCount = 0;

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  union(x, y);
}

for (let i = 1; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    edges.push([i + 1, j + 1, matrix[i][j]]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

for (const [node1, node2, weight] of edges) {
  if (newEdgeCount === n - 2) break;

  if (union(node1, node2)) {
    newConnections.push([node1, node2]);
    mstWeight += weight;
    newEdgeCount++;
  }
}

console.log(
  `${mstWeight} ${newConnections.length}\n${newConnections
    .map((row) => row.join(" "))
    .join("\n")}`.trim()
);