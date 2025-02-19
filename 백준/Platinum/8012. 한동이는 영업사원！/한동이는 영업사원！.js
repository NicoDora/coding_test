const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(currentNode, currentDist, currentDepth) {
  distance[currentNode] = currentDist;
  depth[currentNode] = currentDepth;

  for (const next of graph[currentNode]) {
    if (next === parents[currentNode][0]) continue;
    parents[next][0] = currentNode;
    dfs(next, currentDist + 1, currentDepth + 1);
  }
}

function lca(node1, node2) {
  if (depth[node1] < depth[node2]) [node1, node2] = [node2, node1];

  let diff = depth[node1] - depth[node2];

  for (let i = 0; diff > 0; i++) {
    if (diff & 1) node1 = parents[node1][i];
    diff >>= 1;
  }

  if (node1 === node2) return node1;

  for (let i = maxExp - 1; i >= 0; i--) {
    if (parents[node1][i] !== parents[node2][i]) {
      node1 = parents[node1][i];
      node2 = parents[node2][i];
    }
  }

  return parents[node1][0];
}

const n = Number(input[0]);
const m = Number(input[n]);
const maxExp = Math.floor(Math.log2(n)) + 1;
const graph = Array.from({ length: n + 1 }, () => []);
const parents = Array.from({ length: n + 1 }, () => Array(maxExp).fill(0));
const distance = Array(n + 1).fill(0);
const depth = Array(n + 1).fill(0);
let result = 0;

for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

dfs(1, 0, 0);

for (let j = 1; j < maxExp; j++) {
  for (let i = 1; i <= n; i++) {
    parents[i][j] = parents[parents[i][j - 1]][j - 1];
  }
}

for (let i = n + 1; i < m + n; i++) {
  const node1 = Number(input[i]);
  const node2 = Number(input[i + 1]);
  const lcaToRootDistance = distance[lca(node1, node2)];

  result +=
    distance[node1] - lcaToRootDistance + (distance[node2] - lcaToRootDistance);
}

console.log(result);