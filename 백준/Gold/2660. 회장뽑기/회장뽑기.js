const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const edges = input.slice(1, -1).map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

for (const [node1, node2] of edges) {
  graph[node1][node2] = 1;
  graph[node2][node1] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let s = 1; s <= N; s++) {
    for (let e = 1; e <= N; e++) {
      if (graph[s][k] + graph[k][e] < graph[s][e]) {
        graph[s][e] = graph[s][k] + graph[k][e];
      }
    }
  }
}

const scores = graph
  .slice(1)
  .map((row) => row.slice(1))
  .map((row) => Math.max(...row));
const min = Math.min(...scores);
const candidates = scores
  .map((score, index) => (score === min ? index + 1 : null))
  .filter((score) => score !== null);

console.log(`${min} ${candidates.length}\n${candidates.join(" ")}`);