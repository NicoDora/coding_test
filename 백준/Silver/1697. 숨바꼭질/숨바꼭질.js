const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const MAX = 100000;
const queue = [[N, 0]];
const visited = Array(MAX).fill(false);

visited[N] = true;

for (let i = 0; i < queue.length; i++) {
  const [current, time] = queue[i];

  if (current === K) {
    console.log(time);
    break;
  }

  // 순간이동
  const teleportation = current * 2;
  if (teleportation <= MAX && !visited[teleportation]) {
    queue.push([teleportation, time + 1]);
    visited[teleportation] = true;
  }

  // 걷기
  for (const walk of [current - 1, current + 1]) {
    if (walk >= 0 && walk <= MAX && !visited[walk]) {
      queue.push([walk, time + 1]);
      visited[walk] = true;
    }
  }
}