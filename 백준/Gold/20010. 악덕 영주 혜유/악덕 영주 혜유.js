const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node]));
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if (root1 === root2) return false;

  if (rank[root1] > rank[root2]) parent[root2] = root1;
  else {
    parent[root1] = root2;
    if (rank[root1] === rank[root2]) rank[root2]++;
  }

  return true;
}

function dfs(node, weight) {
  visited[node] = true;

  if (weight > maxDistance) {
    maxDistance = weight;
    farthestNode = node;
  }

  for (const [next, nextWeight] of graph[node]) {
    if (!visited[next]) dfs(next, weight + nextWeight);
  }
}

const [N, K] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((row) => row.split(" ").map(Number));
const parent = Array.from({ length: N }, (_, i) => i);
const rank = Array(N).fill(0);
const graph = Array.from({ length: N }, () => []);
let mstWeight = 0;
let mstEdgeCount = 0;

edges.sort((a, b) => a[2] - b[2]);

for (const [node1, node2, weight] of edges) {
  if (union(node1, node2)) {
    graph[node1].push([node2, weight]);
    graph[node2].push([node1, weight]);
    mstWeight += weight;
    mstEdgeCount++;

    if (mstEdgeCount === N - 1) break;
  }
}

const visited = Array(N).fill(false);
let maxDistance = 0;
let farthestNode = 0;

dfs(0, 0);

visited.fill(false);
maxDistance = 0;
dfs(farthestNode, 0);

console.log(mstWeight + "\n" + maxDistance);