const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(start) {
  const stack = [[start, 0]];
  const visited = Array(n + 1).fill(false);
  const distance = Array(n + 1).fill(0);
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

const n = Number(input[0]);
const graph = {};

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 1; i < n; i++) {
  const [a, b, weight] = input[i].split(" ").map(Number);

  graph[a].push([b, weight]);
  graph[b].push([a, weight]);
}

const leafNode = dfs(1);

console.log(dfs(leafNode[0])[1]);