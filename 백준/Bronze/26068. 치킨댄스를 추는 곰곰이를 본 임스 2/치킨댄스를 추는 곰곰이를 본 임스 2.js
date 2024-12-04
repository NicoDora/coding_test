const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const [_, exp] = input[i].split("-");
  if (exp < 91) count++;
}

console.log(count);