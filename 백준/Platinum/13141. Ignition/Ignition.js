const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
const edges = [];

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
  graph[b][a] = Math.min(graph[b][a], c);
  edges.push([a, b, c]);
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (graph[i][j] > graph[i][k] + graph[k][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}

let result = Infinity;

for (let s = 1; s <= N; s++) {
  const maxTimeToAllNode = Math.max(...graph[s].slice(1));
  let maxEdgeTime = 0;

  for (const [u, v, l] of edges) {
    let burnTime = 0;

    if (Math.abs(graph[s][u] - graph[s][v]) >= l) {
      burnTime = Math.min(graph[s][u], graph[s][v]) + l;
    } else {
      burnTime = (graph[s][u] + graph[s][v] + l) / 2;
    }

    maxEdgeTime = Math.max(maxEdgeTime, burnTime);
  }

  const totalTime = Math.max(maxTimeToAllNode, maxEdgeTime);
  result = Math.min(result, totalTime);
}

console.log(result.toFixed(1));