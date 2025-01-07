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
const planets = input
  .slice(1)
  .map((line, index) => [...line.split(" ").map(Number), index]);
const edges = [];
const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);
let mstWeight = 0;
let edgeCount = 0;

// x, y, z 좌표별로 정렬 후 인접 노드만 간선으로 추가
for (let i = 0; i < 3; i++) {
  planets.sort((a, b) => a[i] - b[i]);

  for (let j = 0; j < N - 1; j++) {
    // edges -> [행성1, 행성2, 비용]
    edges.push([
      planets[j][3],
      planets[j + 1][3],
      Math.min(
        Math.abs(planets[j][0] - planets[j + 1][0]),
        Math.abs(planets[j][1] - planets[j + 1][1]),
        Math.abs(planets[j][2] - planets[j + 1][2])
      ),
    ]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < edges.length; i++) {
  const [node1, node2, weight] = edges[i];

  if (union(node1, node2)) {
    mstWeight += weight;
    edgeCount++;
  }

  if (edgeCount === N - 1) break;
}

console.log(mstWeight);