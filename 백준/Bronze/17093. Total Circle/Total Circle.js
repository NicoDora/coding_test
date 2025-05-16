const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const P = input.slice(1, N + 1).map((row) => row.split(" ").map(Number));
const Q = input.slice(N + 1).map((row) => row.split(" ").map(Number));
let result = 0;

for (let j = 0; j < M; j++) {
  const [qx, qy] = Q[j];
  let maxDist2 = 0;

  for (let i = 0; i < N; i++) {
    const [px, py] = P[i];
    const dx = px - qx;
    const dy = py - qy;
    const dist2 = dx ** 2 + dy ** 2;

    if (dist2 > maxDist2) maxDist2 = dist2;
  }

  if (maxDist2 > result) result = maxDist2;
}

console.log(result);