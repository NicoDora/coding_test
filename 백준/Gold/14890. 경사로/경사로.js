const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function check(path) {
  const installed = Array(N).fill(false);

  for (let i = 0; i < N - 1; i++) {
    const diff = path[i] - path[i + 1];

    if (Math.abs(diff) > 1) return false;
    if (diff === 0) continue;

    if (diff === -1) {
      for (let j = i; j > i - L; j--) {
        if (j < 0 || path[j] !== path[i] || installed[j]) return false;
        installed[j] = true;
      }
    } else if (diff === 1) {
      for (let j = i + 1; j <= i + L; j++) {
        if (j >= N || path[j] !== path[i + 1] || installed[j]) return false;
        installed[j] = true;
      }

      i += L - 1;
    }
  }

  return true;
}

const [N, L] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(" ").map(Number));
let count = 0;

for (let i = 0; i < N; i++) {
  if (check(map[i])) count++;
}

for (let j = 0; j < N; j++) {
  const column = [];

  for (let i = 0; i < N; i++) {
    column.push(map[i][j]);
  }

  if (check(column)) count++;
}

console.log(count);