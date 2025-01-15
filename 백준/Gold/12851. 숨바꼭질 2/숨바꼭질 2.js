const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const MAX = 100000;
const queue = [[N, 0]];
const visited = Array(MAX + 1).fill(-1);
const ways = Array(MAX + 1).fill(0);

visited[N] = 0;
ways[N] = 1;

for (let i = 0; i < queue.length; i++) {
  const [current, time] = queue[i];
  const nextPositions = [current * 2, current - 1, current + 1];

  for (const next of nextPositions) {
    if (next >= 0 && next <= MAX) {
      // 아직 방문하지 않은 경우
      if (visited[next] === -1) {
        visited[next] = time + 1;
        ways[next] = ways[current];
        queue.push([next, time + 1]);
      }
      // 동일한 시간에 다른 경로로 방문할 수 있는 경우
      else if (visited[next] === time + 1) {
        ways[next] += ways[current];
      }
    }
  }
}

console.log(visited[K] + "\n" + ways[K]);