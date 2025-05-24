const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node, parent) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node], parent));
}

function union(node1, node2, rank, parent) {
  const root1 = findRoot(node1, parent);
  const root2 = findRoot(node2, parent);

  if (root1 === root2) return false;

  if (rank[root1] > rank[root2]) parent[root2] = root1;
  else {
    parent[root1] = root2;
    if (rank[root1] === rank[root2]) rank[root2]++;
  }

  return true;
}

function getMstWeight(edges, n) {
  const parent = Array.from({ length: n + 1 }, (_, k) => k);
  const rank = Array(n + 1).fill(0);
  let mstWeight = 0;
  let mstEdgeCount = 0;

  for (const [weight, node1, node2] of edges) {
    if (union(node1, node2, rank, parent)) {
      if (weight === 0) mstWeight++;
      mstEdgeCount++;

      if (mstEdgeCount === n - 1) break;
    }
  }

  return mstEdgeCount === n - 1 ? mstWeight : -1;
}

const result = [];
let i = 0;

while (true) {
  const [n, m, k] = input[i++].split(" ").map(Number);

  if (!n) break;

  const edges = [];

  for (let j = 0; j < m; j++) {
    edges.push(
      input[i++]
        .split(" ")
        .map((v) => (v === "B" ? 0 : v === "R" ? 1 : Number(v)))
    );
  }

  edges.sort((a, b) => a[0] - b[0]);
  const blueFirstMstWeight = getMstWeight(edges, n);

  edges.sort((a, b) => b[0] - a[0]);
  const redFirstMstWeight = getMstWeight(edges, n);

  result.push(
    blueFirstMstWeight === -1 || redFirstMstWeight === -1
      ? 0
      : Number(redFirstMstWeight <= k && k <= blueFirstMstWeight)
  );
}

console.log(result.join("\n"));