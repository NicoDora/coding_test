const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node]));
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if (root1 === root2 || (hasPlant[root1] && hasPlant[root2])) return false;

  if (rank[root1] > rank[root2]) {
    parent[root2] = root1;
    hasPlant[root1] = hasPlant[root1] || hasPlant[root2];
  } else {
    parent[root1] = root2;
    hasPlant[root2] = hasPlant[root1] || hasPlant[root2];
    if (rank[root1] === rank[root2]) rank[root2]++;
  }

  return true;
}

const [N, M, K] = input[0].split(" ").map(Number);
const power = input[1].split(" ").map(Number);
const edges = input.slice(2).map((row) => row.split(" ").map(Number));
const hasPlant = Array(N + 1).fill(false);
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
let mstWeight = 0;

power.map((index) => (hasPlant[index] = true));
edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < M; i++) {
  const [u, v, w] = edges[i];

  if (union(u, v)) mstWeight += w;
}

console.log(mstWeight);