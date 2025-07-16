const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function find(node) {
  if (parent[node] === node) return node;
  return (parent[node] = find(parent[node]));
}

function union(node1, node2) {
  const root1 = find(node1);
  const root2 = find(node2);

  if (root1 === root2) return false;

  if (rank[root1] > rank[root2]) parent[root2] = root1;
  else {
    parent[root1] = root2;
    if (rank[root1] === rank[root2]) rank[root2]++;
  }

  return true;
}

function coordToIndex(x, y) {
  return x * M + y;
}

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(""));
const parent = Array.from({ length: N * M }, (_, i) => i);
const rank = Array(N * M).fill(0);

for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    let nx = x;
    let ny = y;

    if (map[x][y] === "U") nx--;
    else if (map[x][y] === "D") nx++;
    else if (map[x][y] === "L") ny--;
    else ny++;

    const node = coordToIndex(x, y);
    const nextNode = coordToIndex(nx, ny);

    union(node, nextNode);
  }
}

const set = new Set();

for (let i = 0; i < N * M; i++) {
  set.add(find(i));
}

console.log(set.size);