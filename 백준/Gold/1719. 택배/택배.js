const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
const next = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const result = [];

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  graph[a][b] = Math.min(graph[a][b], c);
  graph[b][a] = Math.min(graph[b][a], c);

  next[a][b] = b;
  next[b][a] = a;
}

// Floyd-Warshall
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] > graph[i][k] + graph[k][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
        next[i][j] = next[i][k];
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  result.push(
    next[i]
      .slice(1)
      .map((e) => (e === 0 ? "-" : e))
      .join(" ")
  );
}

console.log(result.join("\n"));