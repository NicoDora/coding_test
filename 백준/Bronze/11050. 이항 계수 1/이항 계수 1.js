const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function NCK(n, k) {
  if (k > n) return 0;
  else if (k === 0 || k === n) return 1;
  return NCK(n - 1, k) + NCK(n - 1, k - 1);
}

console.log(NCK(N, K));