const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const [N, K] = input[index++].split(" ").map(Number);
  const times = [0, ...input[index++].split(" ").map(Number)];
  const graph = Array.from({ length: N + 1 }, () => []);
  const inDegree = Array(N + 1).fill(0);

  for (let i = 0; i < K; i++) {
    const [X, Y] = input[index++].split(" ").map(Number);
    graph[X].push(Y);
    inDegree[Y]++;
  }

  const W = Number(input[index++]);

  const queue = [];
  const resultTime = Array(N + 1).fill(0);

  // 진입 차수가 0인 초기 노드를 큐에 넣기
  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      resultTime[i] = times[i];
    }
  }

  // 위상 정렬
  for (let i = 0; i < queue.length; i++) {
    const current = queue[i];

    for (const next of graph[current]) {
      inDegree[next]--;
      resultTime[next] = Math.max(
        resultTime[next],
        resultTime[current] + times[next]
      );

      if (inDegree[next] === 0) queue.push(next);
    }
  }
  result.push(resultTime[W]);
}

console.log(result.join("\n"));