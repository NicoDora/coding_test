const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const M = input[1].split(" ").map(Number);
const result = [];

for (let i = 0; i < N; i++) {
  if (M[i] < 250) result.push(4);
  else if (M[i] < 275) result.push(3);
  else if (M[i] < 300) result.push(2);
  else result.push(1);
}

console.log(result.join(" "));