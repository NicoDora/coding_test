const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function combination(n, r) {
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= n - i;
    result /= i + 1;
  }
  return result;
}

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  result.push(combination(M, N));
}

console.log(result.join("\n"));