const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const K = Number(input[0]);
const result = [];
let index = 1;

for (let k = 0; k < K; k++) {
  const [V, E] = input[index++].split(" ").map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);
  const color = Array(V + 1).fill(0);
  let isBipartite = true;

  for (let i = 0; i < E; i++) {
    const [a, b] = input[index++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= V && isBipartite; i++) {
    if (color[i] !== 0) continue;

    const stack = [i];
    color[i] = 1;

    while (stack.length && isBipartite) {
      const current = stack.pop();

      for (const next of graph[current]) {
        if (color[next] === 0) {
          color[next] = (color[current] % 2) + 1;
          stack.push(next);
        } else if (color[next] === color[current]) {
          isBipartite = false;
          break;
        }
      }
    }
  }

  result.push(isBipartite ? "YES" : "NO");
}

console.log(result.join("\n"));