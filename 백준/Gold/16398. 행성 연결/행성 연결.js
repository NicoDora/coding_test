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
const edges = [];
const parent = Array.from({ length: N }, (_, i) => i);
const rank = Array(N).fill(0);
let mstWeight = 0;
let mstEdgeCount = 0;

for (let i = 1; i < N; i++) {
  const row = input[i].split(" ").map(Number);

  for (let j = i; j < N; j++) {
    edges.push([i - 1, j, row[j]]);
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

console.log(mstWeight);