const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function isConnected(area) {
  if (area.length <= 1) return true;

  const areaSet = new Set(area);
  const startNode = area[0];
  const visited = Array(N + 1).fill(false);
  let count = 0;

  function dfs(node) {
    visited[node] = true;
    count++;

    for (const next of graph[node - 1]) {
      if (areaSet.has(next) && !visited[next]) dfs(next);
    }
  }

  dfs(startNode);

  return area.length === count;
}

const N = Number(input[0]);
const population = [0, ...input[1].split(" ").map(Number)];
const graph = [];
let minDiff = Infinity;

for (let i = 2; i < N + 2; i++) {
  graph.push(input[i].split(" ").map(Number).slice(1));
}

for (let i = 1; i < (1 << N) - 1; i++) {
  const area = i.toString(2).padStart(N, "0");
  const areaA = [];
  const areaB = [];

  for (let j = 0; j < N; j++) {
    if (area[j] === "1") areaA.push(j + 1);
    else areaB.push(j + 1);
  }

  if (isConnected(areaA) && isConnected(areaB)) {
    let populationA = 0;
    let populationB = 0;

    for (const p of areaA) {
      populationA += population[p];
    }

    for (const p of areaB) {
      populationB += population[p];
    }

    minDiff = Math.min(minDiff, Math.abs(populationA - populationB));
  }
}

console.log(minDiff === Infinity ? -1 : minDiff);