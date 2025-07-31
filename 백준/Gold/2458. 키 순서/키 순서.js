const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
const edges = input.slice(1).map((row) => row.split(" ").map(Number));
let knownCount = 0;

for (const [start, end] of edges) {
  graph[start][end] = true;
}

for (let k = 1; k <= N; k++) {
  for (let s = 1; s <= N; s++) {
    for (let e = 1; e <= N; e++) {
      if (graph[s][k] && graph[k][e]) graph[s][e] = true;
    }
  }
}

for (let i = 1; i <= N; i++) {
  let smaller = 0;
  let taller = 0;

  for (let j = 1; j <= N; j++) {
    if (i === j) continue;

    if (graph[i][j]) taller++;
    if (graph[j][i]) smaller++;
  }

  if (smaller + taller === N - 1) knownCount++;
}

console.log(knownCount);