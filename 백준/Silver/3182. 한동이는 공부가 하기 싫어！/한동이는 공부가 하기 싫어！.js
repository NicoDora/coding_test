const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

function ask(n) {
  const visited = Array(N + 1).fill(false);
  let count = 0;

  while (!visited[n]) {
    visited[n] = true;
    count++;
    n = array[n];
  }

  return count;
}

const N = input[0];
const array = [0, ...input.slice(1)];
let maxCount = 0;
let result = 0;

for (let i = 1; i <= N; i++) {
  const count = ask(i);

  if (count > maxCount) {
    maxCount = count;
    result = i;
  }
}

console.log(result);