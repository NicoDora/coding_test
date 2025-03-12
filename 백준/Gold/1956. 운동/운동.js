const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: V + 1 }, () => Array(V + 1).fill(Infinity));
let result = Infinity;

for (let i = 1; i <= V; i++) {
  for (let j = 1; j <= V; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = c;
}

// Floyd-Warshall
for (let k = 1; k <= V; k++) {
  for (let s = 1; s <= V; s++) {
    for (let e = 1; e <= V; e++) {
      if (graph[s][e] > graph[s][k] + graph[k][e]) {
        graph[s][e] = graph[s][k] + graph[k][e];
      }
    }
  }
}

for (let i = 1; i <= V; i++) {
  for (let j = 1; j <= V; j++) {
    if (i !== j) result = Math.min(result, graph[i][j] + graph[j][i]);
  }
}

console.log(result === Infinity ? -1 : result);