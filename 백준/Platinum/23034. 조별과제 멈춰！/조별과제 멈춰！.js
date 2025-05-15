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

function findMaxEdge(start, end) {
  const visited = Array(N + 1).fill(false);
  const maxEdge = Array(N + 1).fill(-1);

  function dfs(node, max) {
    if (node === end) return true;
    visited[node] = true;

    for (const [nextNode, weight] of graph[node]) {
      if (visited[nextNode]) continue;

      const currentMax = Math.max(max, weight);
      maxEdge[nextNode] = currentMax;

      if (dfs(nextNode, currentMax)) return true;
    }

    return false;
  }

  dfs(start, 0);
  return maxEdge[end];
}

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1, M + 1).map((row) => row.split(" ").map(Number));
const Q = Number(input[M + 1]);
const questions = input.slice(M + 2).map((row) => row.split(" ").map(Number));
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
const mstEdges = [];
let mstWeight = 0;
let mstEdgeCount = 0;

edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < M; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2)) {
    mstEdges.push([node1, node2, weight]);
    mstWeight += weight;
    mstEdgeCount++;

    if (mstEdgeCount === N - 1) break;
  }
}

const graph = Array.from({ length: N + 1 }, () => []);
const result = [];

for (const [node1, node2, weight] of mstEdges) {
  graph[node1].push([node2, weight]);
  graph[node2].push([node1, weight]);
}

for (const [x, y] of questions) {
  result.push(mstWeight - findMaxEdge(x, y));
}

console.log(result.join("\n"));