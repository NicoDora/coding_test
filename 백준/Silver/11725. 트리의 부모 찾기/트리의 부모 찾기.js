const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(node) {
  for (let i = 0; i < graph[node].length; i++) {
    const num = graph[node][i];

    if (!visited[num]) {
      visited[num] = node;
      dfs(num);
    }
  }
}

const N = Number(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

dfs(1);

console.log(visited.slice(2).join("\n"));