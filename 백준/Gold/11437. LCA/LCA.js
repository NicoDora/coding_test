const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function getDepth(node, currentDepth) {
  depth[node] = currentDepth;

  for (const nextNode of graph[node]) {
    if (nextNode === parent[node]) continue;
    parent[nextNode] = node;
    getDepth(nextNode, currentDepth + 1);
  }
}

function lca(node1, node2) {
  while (depth[node1] !== depth[node2]) {
    if (depth[node1] > depth[node2]) node1 = parent[node1];
    else node2 = parent[node2];
  }

  while (node1 !== node2) {
    node1 = parent[node1];
    node2 = parent[node2];
  }

  return node1;
}

const N = Number(input[0]);
const M = Number(input[N]);
const graph = Array.from({ length: N + 1 }, () => []);
const depth = Array(N + 1).fill(0);
const parent = Array(N + 1).fill(0);
const result = [];

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

getDepth(1, 0);

for (let i = N + 1; i <= N + M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result.push(lca(a, b));
}

console.log(result.join("\n"));