const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(node) {
  visited[node] = true;

  for (const nextNode of graph[node]) {
    if (visited[nextNode]) continue;

    dfs(nextNode);

    dp[node][0] += dp[nextNode][1];
    dp[node][1] += Math.min(dp[nextNode][0], dp[nextNode][1]);
  }
}

const N = Number(input[0]);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const dp = Array.from({ length: N + 1 }, () => [0, 1]);
const visited = Array(N + 1).fill(false);

// 그래프 초기 선언
for (let i = 0; i < N - 1; i++) {
  graph[edges[i][0]].push(edges[i][1]);
  graph[edges[i][1]].push(edges[i][0]);
}

dfs(1);

console.log(Math.min(...dp[1]));