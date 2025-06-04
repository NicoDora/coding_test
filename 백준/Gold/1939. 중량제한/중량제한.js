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

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1, -1).map((row) => row.split(" ").map(Number));
const [factory1, factory2] = input[M + 1].split(" ").map(Number);
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);

edges.sort((a, b) => b[2] - a[2]);

for (const [node1, node2, weight] of edges) {
  if (union(node1, node2) && findRoot(factory1) === findRoot(factory2)) {
    console.log(weight);
    break;
  }
}