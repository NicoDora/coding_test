const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function euclideanDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

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

const n = Number(input[0]);
const stars = input.slice(1).map((line) => line.split(" ").map(Number));
const edges = [];
const parent = Array.from({ length: n + 1 }, (_, i) => i);
const rank = Array(n + 1).fill(0);
let mstWeight = 0;
let edgeCount = 0;

// 모든 별들의 거리를 구함
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const [x1, y1] = stars[i];
    const [x2, y2] = stars[j];

    edges.push([i, j, euclideanDistance(x1, y1, x2, y2)]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < edges.length; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2)) {
    mstWeight += weight;
    edgeCount++;
  }

  if (edgeCount === edges.length - 1) break;
}

console.log(mstWeight);