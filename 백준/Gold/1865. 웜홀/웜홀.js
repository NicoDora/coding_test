const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function bellmanFord(start, graph, N) {
  const distance = Array(N + 1).fill(Infinity);

  distance[start] = 0;

  for (let i = 1; i < N; i++) {
    for (let node = 0; node <= N; node++) {
      if (distance[node] === Infinity) continue;

      for (const [next, weight] of graph[node]) {
        const nextWeight = distance[node] + weight;

        if (distance[next] > nextWeight) distance[next] = nextWeight;
      }
    }
  }

  for (let node = 0; node <= N; node++) {
    if (distance[node] === Infinity) continue;

    for (const [next, weight] of graph[node]) {
      if (distance[next] > distance[node] + weight) return "YES";
    }
  }

  return "NO";
}

const T = Number(input[0]);
const result = Array(T);
let index = 1;

for (let t = 0; t < T; t++) {
  const [N, M, W] = input[index++].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [a, b, c] = input[index++].split(" ").map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  for (let i = 0; i < W; i++) {
    const [a, b, c] = input[index++].split(" ").map(Number);
    graph[a].push([b, -c]);
  }

  for (let i = 1; i <= N; i++) {
    graph[0].push([i, 0]);
  }

  result[t] = bellmanFord(0, graph, N);
}

console.log(result.join("\n"));