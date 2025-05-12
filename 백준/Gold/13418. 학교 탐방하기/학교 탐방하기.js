const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node, parent) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node], parent));
}

function union(node1, node2, parent, rank) {
  const root1 = findRoot(node1, parent);
  const root2 = findRoot(node2, parent);

  if (root1 === root2) return false;

  if (rank[root1] > rank[root2]) parent[root2] = root1;
  else {
    parent[root1] = root2;
    if (rank[root1] === rank[root2]) rank[root2]++;
  }

  return true;
}

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((row) => {
  const [a, b, c] = row.split(" ").map(Number);
  return [a, b, Number(!c)];
});
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
let mstWeight = 0;
let mstEdgeCount = 0;

edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i <= M; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2, parent, rank)) {
    if (weight) mstWeight++;
    mstEdgeCount++;

    if (mstEdgeCount === N) break;
  }
}

const parent2 = Array.from({ length: N + 1 }, (_, i) => i);
const rank2 = Array(N + 1).fill(0);
let mstWeight2 = 0;
let mstEdgeCount2 = 0;

edges.sort((a, b) => b[2] - a[2]);

for (let i = 0; i <= M; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2, parent2, rank2)) {
    if (weight) mstWeight2++;
    mstEdgeCount2++;

    if (mstEdgeCount2 === N) break;
  }
}

console.log(mstWeight2 ** 2 - mstWeight ** 2);