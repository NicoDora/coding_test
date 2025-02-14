const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(current, currentDist, currentDepth) {
  distance[current] = currentDist;
  depth[current] = currentDepth;

  for (const [next, weight] of graph[current]) {
    if (next === parent[current][0]) continue;
    parent[next][0] = current;
    dfs(next, currentDist + weight, currentDepth + 1);
  }
}

function lca(node1, node2) {
  if (depth[node1] < depth[node2]) [node1, node2] = [node2, node1];

  let diff = depth[node1] - depth[node2];

  for (let i = 0; diff > 0; i++) {
    if (diff & 1) node1 = parent[node1][i];
    diff >>= 1;
  }

  if (node1 === node2) return node1;

  for (let i = maxExp - 1; i >= 0; i--) {
    if (parent[node1][i] !== parent[node2][i]) {
      node1 = parent[node1][i];
      node2 = parent[node2][i];
    }
  }

  return parent[node1][0];
}

const N = Number(input[0]);
const M = Number(input[N]);
const maxExp = Math.floor(Math.log2(N)) + 1;
const graph = Array.from({ length: N + 1 }, () => []);
const parent = Array.from({ length: N + 1 }, () => Array(maxExp).fill(0));
const distance = Array(N + 1).fill(0);
const depth = Array(N + 1).fill(0);
const result = [];

for (let i = 1; i < N; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

dfs(1, 0, 0);

for (let j = 1; j < maxExp; j++) {
  for (let i = 1; i <= N; i++) {
    parent[i][j] = parent[parent[i][j - 1]][j - 1];
  }
}

for (let i = N + 1; i <= N + M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const lcaToRootDistance = distance[lca(a, b)];

  result.push(
    distance[a] - lcaToRootDistance + (distance[b] - lcaToRootDistance)
  );
}

console.log(result.join("\n"));