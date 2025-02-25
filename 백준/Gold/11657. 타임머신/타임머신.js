const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function bellmanFord(start) {
  const distance = Array(N + 1).fill(Infinity);

  distance[start] = 0;

  for (let i = 1; i < N; i++) {
    for (let node = 1; node <= N; node++) {
      if (distance[node] === Infinity) continue;

      for (const [next, weight] of graph[node]) {
        const nextWeight = distance[node] + weight;

        if (distance[next] > nextWeight) distance[next] = nextWeight;
      }
    }
  }

  for (let node = 1; node <= N; node++) {
    if (distance[node] === Infinity) {
      distance[node] = -1;
      continue;
    }

    for (const [next, weight] of graph[node]) {
      if (distance[next] > distance[node] + weight) return [-1];
    }
  }

  return distance.slice(2);
}

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
}

console.log(bellmanFord(1).join("\n"));