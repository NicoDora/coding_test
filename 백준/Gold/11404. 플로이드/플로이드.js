const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
const result = [];

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

for (let i = 2; i < m + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
}

// Floyd-Warshall
for (let k = 1; k <= n; k++) {
  for (let s = 1; s <= n; s++) {
    for (let e = 1; e <= n; e++) {
      if (graph[s][e] > graph[s][k] + graph[k][e]) {
        graph[s][e] = graph[s][k] + graph[k][e];
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  result.push(
    graph[i]
      .slice(1)
      .map((e) => (e === Infinity ? 0 : e))
      .join(" ") + "\n"
  );
}

console.log(result.join(""));