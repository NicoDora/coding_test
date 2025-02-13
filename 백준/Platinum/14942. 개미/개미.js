const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(current, currentDist) {
  distance[current] = currentDist;

  for (const [next, weight] of graph[current]) {
    if (next === parent[current][0]) continue;
    parent[next][0] = current;
    dfs(next, currentDist + weight);
  }
}

function binaryLifting(current, energy) {
  for (let i = maxExp - 1; i >= 0; i--) {
    let next = parent[current][i];

    if (next > 0 && distance[current] - distance[next] <= energy) {
      energy -= distance[current] - distance[next];
      current = next;
    }
  }

  return current;
}

const n = Number(input[0]);
const maxExp = Math.floor(Math.log2(n)) + 1;
const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array(n + 1).fill(0);
const parent = Array.from({ length: n + 1 }, () => Array(maxExp).fill(0));
const result = [];

for (let i = n + 1; i < n * 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

dfs(1, 0);

for (let j = 1; j < maxExp; j++) {
  for (let i = 1; i <= n; i++) {
    parent[i][j] = parent[parent[i][j - 1]][j - 1];
  }
}

for (let i = 1; i <= n; i++) {
  const energy = Number(input[i]);

  if (energy >= distance[i]) result.push(1);
  else result.push(binaryLifting(i, energy));
}

console.log(result.join("\n"));