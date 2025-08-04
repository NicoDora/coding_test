const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);
const dp = Array(N + 1).fill(0);
const buildTime = Array(N + 1).fill(0);
const inDegree = Array(N + 1).fill(0);
const queue = [];

for (let i = 1; i <= N; i++) {
  const tokens = input[i].split(" ").map(Number);
  const time = tokens[0];

  buildTime[i] = time;

  for (let j = 1; j < tokens.length - 1; j++) {
    const prev = tokens[j];

    graph[prev].push(i);
    inDegree[i]++;
  }
}

for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
    dp[i] = buildTime[i];
  }
}

for (let i = 0; i < queue.length; i++) {
  const current = queue[i];

  for (const next of graph[current]) {
    dp[next] = Math.max(dp[next], dp[current] + buildTime[next]);

    inDegree[next]--;
    if (inDegree[next] === 0) queue.push(next);
  }
}

console.log(dp.slice(1).join("\n"));