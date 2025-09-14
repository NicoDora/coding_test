const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const X = Number(input[0]);
const N = Number(input[1]);
let total = 0;

for (let i = 2; i < N + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  total += a * b;
}

console.log(X === total ? "Yes" : "No");