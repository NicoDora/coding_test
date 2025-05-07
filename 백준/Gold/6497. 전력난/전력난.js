const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node, parent) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node], parent));
}

function union(node1, node2, parent, rank) {
  const root1 = findRoot(node1, parent);
  const root2 = findRoot(node2, parent);

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

const result = [];
let index = 0;

while (true) {
  const [m, n] = input[index++].split(" ").map(Number);

  if (m === 0 && n === 0) break;

  const edges = input
    .slice(index, index + n)
    .map((row) => row.split(" ").map(Number));
  const parent = Array.from({ length: m }, (_, i) => i);
  const rank = Array(m).fill(0);
  const totalWeight = edges.reduce((sum, [, , weight]) => (sum += weight), 0);
  let mstWeight = 0;
  let mstEdgeCount = 0;

  edges.sort((a, b) => a[2] - b[2]);
  index += n;

  for (let i = 0; i < n; i++) {
    const [x, y, z] = edges[i];

    if (union(x, y, parent, rank)) {
      mstWeight += z;
      mstEdgeCount++;

      if (mstEdgeCount === m - 1) break;
    }
  }

  result.push(totalWeight - mstWeight);
}

console.log(result.join("\n"));