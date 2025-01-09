const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array(N + 1).fill(0);
const queue = [];
const result = [];

// 그래프 초기화
for (let i = 1; i <= M; i++) {
  const [length, ...order] = input[i].split(" ").map(Number);

  for (let j = 0; j < length - 1; j++) {
    graph[order[j]].push(order[j + 1]);
    inDegree[order[j + 1]]++;
  }
}

// 진입 차수가 0인 초기값 queue에 넣기
for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
  }
}

// 위상 정렬
for (let i = 0; i < queue.length; i++) {
  const current = queue[i];
  result.push(current);

  for (const next of graph[current]) {
    inDegree[next]--;
    if (inDegree[next] === 0) queue.push(next);
  }
}

console.log(result.length === N ? result.join("\n") : 0);