const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function find(node, parent) {
  if (parent[node] === node) return node;
  return (parent[node] = find(parent[node], parent));
}

function union(node1, node2, parent, rank, friendSize) {
  const root1 = find(node1, parent);
  const root2 = find(node2, parent);

  if (root1 === root2) return friendSize[root1];

  if (rank[root1] > rank[root2]) {
    parent[root2] = root1;
    friendSize[root1] += friendSize[root2];
    return friendSize[root1];
  }

  parent[root1] = root2;
  friendSize[root2] += friendSize[root1];

  if (rank[root1] === rank[root2]) rank[root2]++;

  return friendSize[root2];
}

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const F = Number(input[index++]);
  const map = new Map();
  const edges = [];
  let mapIndex = 0;

  for (let f = 0; f < F; f++) {
    const [friend1, friend2] = input[index++].split(" ");

    if (!map.has(friend1)) map.set(friend1, mapIndex++);
    if (!map.has(friend2)) map.set(friend2, mapIndex++);

    edges.push([map.get(friend1), map.get(friend2)]);
  }

  const mapSize = map.size;
  const parent = Array.from({ length: mapSize }, (_, i) => i);
  const rank = Array(mapSize).fill(0);
  const friendSize = Array(mapSize).fill(1);

  for (const [node1, node2] of edges) {
    result.push(union(node1, node2, parent, rank, friendSize));
  }
}

console.log(result.join("\n"));