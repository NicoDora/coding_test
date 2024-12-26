const fs = require("fs");
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);

const count = Array(10).fill(0);
const calculate = String(A * B * C);

for (let i = 0; i < calculate.length; i++) {
  count[calculate[i]]++;
}

console.log(count.join("\n"));