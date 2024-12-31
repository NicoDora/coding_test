const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node])); // root노드 탐색 및 경로 압축
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if (root1 !== root2) parent[root1] = root2;
}

const [N, M] = input[0].split(" ").map(Number);
const knowPeople = input[1].split(" ").slice(1).map(Number);
const parties = input
  .slice(2)
  .map((line) => line.split(" ").slice(1).map(Number));
const parent = Array.from({ length: N + 1 }, (_, i) => i);
let result = 0;

for (let i = 0; i < M; i++) {
  const [first, ...rest] = parties[i];

  for (let j = 0; j < rest.length; j++) {
    union(first, rest[j]);
  }
}

// 진실을 아는 사람들이 속한 그룹의 root를 truthRoot set으로 설정
const truthRoot = new Set(knowPeople.map(findRoot));

// party에 속한 사람들 각각의 rootNode가 truthRoot에 속하는지 확인 후, 속하지 않는 party만이 거짓말을 할 수 있는 파티.
// (root를 찾을 때, 이미 경로 압축을 했으므로 party에 속한 사람 중 한명의 rootNode만 확인하면 됨)
for (let i = 0; i < M; i++) {
  if (!truthRoot.has(findRoot(parties[i][0]))) result++;
}

console.log(result);