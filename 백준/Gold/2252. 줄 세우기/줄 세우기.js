const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = {};
const inDegree = Array(N + 1).fill(0);
const result = [];
const queue = [];

// 그래프 초기화
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

// 진입 차수 계산
for (const start in graph) {
  for (const end of graph[start]) {
    inDegree[end] += 1;
  }
}

// 진입 차수가 0인 초기 노드를 큐에 넣기
for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) queue.push(i);
}

// 위상 정렬
for (let i = 0; i < queue.length; i++) {
  const current = queue[i];
  result.push(current);

  for (const next of graph[current]) {
    inDegree[next] -= 1;
    if (inDegree[next] === 0) queue.push(next);
  }
}

console.log(result.join(" "));