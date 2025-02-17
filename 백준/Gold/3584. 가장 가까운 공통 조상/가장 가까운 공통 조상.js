const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(current, currentDepth, depth, graph) {
  depth[current] = currentDepth;

  for (const next of graph[current]) {
    dfs(next, currentDepth + 1, depth, graph);
  }
}

function lca(node1, node2, depth, parents, maxExp) {
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

const T = Number(input[0]);
const result = [];
let index = 1;

for (let _ = 0; _ < T; _++) {
  const N = Number(input[index++]);
  const maxExp = Math.floor(Math.log2(N)) + 1;
  const graph = Array.from({ length: N + 1 }, () => []);
  const parents = Array.from({ length: N + 1 }, () => Array(maxExp).fill(0));
  const depth = Array(N + 1).fill(0);
  let root = 0;

  for (let i = 0; i < N - 1; i++) {
    const [a, b] = input[index++].split(" ").map(Number);
    graph[a].push(b);
    parents[b][0] = a;
  }

  for (let i = 1; i <= N; i++) {
    if (parents[i][0] === 0) {
      root = i;
      break;
    }
  }

  for (let j = 1; j < maxExp; j++) {
    for (let i = 1; i <= N; i++) {
      parents[i][j] = parents[parents[i][j - 1]][j - 1];
    }
  }

  dfs(root, 0, depth, graph);

  const [node1, node2] = input[index++].split(" ").map(Number);

  result.push(lca(node1, node2, depth, parents, maxExp));
}

console.log(result.join("\n"));