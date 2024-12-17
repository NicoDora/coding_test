const fs = require("fs");
const [N, r, c] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

function findOrder(N, r, c) {
  if (N === 0) return 0;

  const half = 2 ** (N - 1);
  const size = half * half;

  if (r < half && c < half) return findOrder(N - 1, r, c);
  else if (r < half && c >= half) return size + findOrder(N - 1, r, c - half);
  else if (r >= half && c < half) return 2 * size + findOrder(N - 1, r - half, c);
  else return 3 * size + findOrder(N - 1, r - half, c - half);
}

console.log(findOrder(N, r, c));