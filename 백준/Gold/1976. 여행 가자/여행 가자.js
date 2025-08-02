const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node]));
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if (root1 === root2) return;

  if (rank[root1] > rank[root2]) parent[root2] = root1;
  else {
    parent[root1] = root2;
    if (rank[root1] === rank[root2]) rank[root2]++;
  }
}

const N = Number(input[0]);
const M = Number(input[1]);
const cities = input.slice(2, N + 2).map((row) => row.split(" ").map(Number));
const plans = input[N + 2].split(" ").map(Number);
const edges = [];
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
let result = "YES";

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (cities[i][j]) edges.push([i + 1, j + 1]);
  }
}

for (const [node1, node2] of edges) {
  union(node1, node2);
}

let start = findRoot(plans[0]);

for (const node of plans.slice(1)) {
  if (findRoot(node) !== start) result = "NO";
}

console.log(result);