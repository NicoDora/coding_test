const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const Q = Number(input[0]);
const result = [];

for (let i = 1; i <= Q; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const start = a - 201;
  const end = b - 201;

  const inner = end >= start ? end - start : 43 - start + end;
  const outer = start >= end ? start - end : 43 - end + start;

  if (inner < outer) result.push("Inner circle line");
  else if (outer < inner) result.push("Outer circle line");
  else result.push("Same");
}

console.log(result.join("\n"));