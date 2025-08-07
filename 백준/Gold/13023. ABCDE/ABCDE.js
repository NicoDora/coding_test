const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(node, depth) {
  if (depth === 5) {
    console.log(1);
    process.exit();
  }

  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) dfs(next, depth + 1);
  }

  visited[node] = false;
}

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: N }, () => []);
const visited = Array(N).fill(false);

for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 0; i < N; i++) {
  dfs(i, 1);
}

console.log(0);