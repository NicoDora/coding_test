const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const graph = new Map();

for (let i = 1; i <= N; i++) {
  graph.set(i, []);
}

for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph.get(a).push(b);
  graph.get(b).push(a);
}

const queue = [1];
const visited = Array(N + 1).fill(false);
let count = 0;

visited[1] = true;

while (queue.length > 0) {
  const current = queue.shift();

  for (const neighbor of graph.get(current)) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      queue.push(neighbor);
      count++;
    }
  }
}

console.log(count);