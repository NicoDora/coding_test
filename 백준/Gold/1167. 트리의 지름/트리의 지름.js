const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(start) {
  const stack = [[start, 0]];
  const visited = Array(V + 1).fill(false);
  const distance = Array(V + 1).fill(0);
  let farthestNode = start;
  let maxDistance = 0;

  visited[start] = true;

  while (stack.length > 0) {
    const [node, dist] = stack.pop();

    for (const [next, weight] of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        distance[next] = dist + weight;
        stack.push([next, distance[next]]);

        if (distance[next] > maxDistance) {
          maxDistance = distance[next];
          farthestNode = next;
        }
      }
    }
  }

  return [farthestNode, maxDistance];
}

const V = Number(input[0]);
const graph = {};

for (let i = 1; i <= V; i++) {
  graph[i] = [];
}

for (let i = 1; i <= V; i++) {
  const line = input[i].split(" ").map(Number);
  const node = line[0];

  for (let j = 2; j < line.length - 1; j += 2) {
    graph[node].push([line[j - 1], line[j]]);
  }
}

const leafNode = dfs(1);

console.log(dfs(leafNode[0])[1]);