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

const N = Number(input[0]);
const costs = input.slice(1).map((row) => row.trim().split(/\s+/).map(Number));
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
const edges = [];
const newEdges = [];
let mstWeight = 0;

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const cost = costs[i][j];

    if (cost < 0) {
      union(i + 1, j + 1);
      mstWeight += -cost;
    } else edges.push([i + 1, j + 1, cost]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

for (const [node1, node2, weight] of edges) {
  if (union(node1, node2)) {
    mstWeight += weight;
    newEdges.push([node1, node2]);
  }
}

console.log(
  `${mstWeight} ${newEdges.length}\n${newEdges
    .map((row) => row.join(" "))
    .join("\n")}`
);