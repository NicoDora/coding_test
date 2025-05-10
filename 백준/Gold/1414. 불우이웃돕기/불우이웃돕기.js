const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function changeChar2Num(char) {
  const ascii = char.charCodeAt();

  if (ascii >= 97 && ascii <= 122) return ascii - 96;
  return ascii - 38;
}

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

const N = Number(input[0]);
const lanCable = input.slice(1).map((row) => row.split(""));
const edges = [];
const parent = Array.from({ length: N }, (_, i) => i);
const rank = Array(N).fill(0);
let mstWeight = 0;
let mstEdgeCount = 0;

if (N === 1) {
  if (lanCable[0][0] === "0") console.log(0);
  else console.log(changeChar2Num(lanCable[0][0]));
  return;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (lanCable[i][j] === "0") continue;
    edges.push([i, j, changeChar2Num(lanCable[i][j])]);
  }
}

const totalWeight = edges.reduce((sum, [, , weight]) => (sum += weight), 0);
edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < edges.length; i++) {
  const [node1, node2, weight] = edges[i];

  if (node1 === node2) continue;

  if (union(node1, node2)) {
    mstWeight += weight;
    mstEdgeCount++;

    if (mstEdgeCount === N - 1) break;
  }
}

if (mstEdgeCount === N - 1 && mstWeight) console.log(totalWeight - mstWeight);
else console.log(-1);