const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function makeTree(node, par) {
  parent[node] = par;

  for (const neighbor of edgeInfo[node]) {
    if (neighbor !== par) {
      tree[node].push(neighbor);
      makeTree(neighbor, node);
    }
  }
}

function countSubtreeNodes(node) {
  for (const subNode of tree[node]) {
    countSubtreeNodes(subNode);
    size[node] += size[subNode];
  }
}

const [N, R, Q] = input[0].split(" ").map(Number);
const edges = input.slice(1, N).map((line) => line.split(" ").map(Number));
const query = input.slice(N).map(Number);
const edgeInfo = Array.from({ length: N + 1 }, () => []);
const parent = Array(N + 1).fill(-1);
const tree = Array.from({ length: N + 1 }, () => []);
const size = Array(N + 1).fill(1);
const result = [];

for (let i = 0; i < N - 1; i++) {
  const [node1, node2] = edges[i];

  edgeInfo[node1].push(node2);
  edgeInfo[node2].push(node1);
}

// 1. 입력으로 주어진 간선 정보를 가지고 트리를 만듬.
makeTree(R, -1);
// 2. 각 정점들을 루트로 하는 서브트리에 속한 정점을 수를 저장함.
countSubtreeNodes(R);

// 3. 입력 쿼리를 루트로 하는 서브트리에 속한 정점의 수를 출력함.
for (let i = 0; i < Q; i++) {
  result.push(size[query[i]]);
}

console.log(result.join("\n"));