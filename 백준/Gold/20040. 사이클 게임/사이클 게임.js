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
    if (rank[root1] > root2) parent[root2] = root1;
    else if (rank[root1] < root2) parent[root1] = root2;
    else {
      parent[root2] = root1;
      rank[root1]++;
    }
    return true;
  }
  return false;
}

const [n, m] = input[0].split(" ").map(Number);
const parent = Array.from({ length: n }, (_, i) => i);
const rank = Array(n).fill(0);
let result = 0;

for (let i = 1; i <= m; i++) {
  const [node1, node2] = input[i].split(" ").map(Number);

  if (!union(node1, node2)) {
    result = i;
    break;
  }
}

console.log(result);