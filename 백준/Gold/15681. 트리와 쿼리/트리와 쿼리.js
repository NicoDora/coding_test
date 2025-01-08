const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function countSubtreeNodes(node) {
  if (visited[node]) return dp[node];
  visited[node] = true;

  for (const subNode of tree[node]) {
    if (visited[subNode]) continue;
    dp[node] += countSubtreeNodes(subNode);
  }

  return dp[node];
}

const [N, R, Q] = input[0].split(" ").map(Number);
const edges = input.slice(1, N).map((line) => line.split(" ").map(Number));
const query = input.slice(N).map(Number);
const tree = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const dp = Array(N + 1).fill(1);
const result = [];

// 1. 입력으로 주어진 간선 정보를 가지고 트리를 만듬.
for (let i = 0; i < N - 1; i++) {
  const [node1, node2] = edges[i];

  tree[node1].push(node2);
  tree[node2].push(node1);
}

// 2. 각 정점들을 루트로 하는 서브트리에 속한 정점을 수를 저장함.
countSubtreeNodes(R);

// 3. 입력 쿼리를 루트로 하는 서브트리에 속한 정점의 수를 출력함.
for (let i = 0; i < Q; i++) {
  result.push(dp[query[i]]);
}

console.log(result.join("\n"));