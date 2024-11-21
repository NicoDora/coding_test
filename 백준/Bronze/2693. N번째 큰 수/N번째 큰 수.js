const fs = require("fs");
const [T, ...input] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];

for (let i = 0; i < T; i++) {
  const A = input[i].split(" ").map(Number);
  result.push(A.sort((a, b) => b - a)[2]);
}

console.log(result.join("\n"));