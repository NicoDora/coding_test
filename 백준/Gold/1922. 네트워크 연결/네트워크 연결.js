const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node]));
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if (root1 !== root2) {
    if (rank[root1] > rank[root2]) parent[root2] = root1;
    else if (rank[root1] < rank[root2]) parent[root1] = root2;
    else {
      parent[root2] = root1;
      rank[root1]++;
    }
    return true;
  }
  return false;
}

const N = Number(input[0]);
const M = Number(input[1]);
const edges = input.slice(2).map((line) => line.split(" ").map(Number));
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
let mstWeight = 0;
let edgeCount = 0;

edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < M; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2)) {
    mstWeight += weight;
    edgeCount++;
  }

  if (edgeCount === N - 1) break;
}

console.log(mstWeight);