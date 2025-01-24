const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let current = 0;
let max = 0;

for (let i = 0; i < input.length; i++) {
  const [out, inCount] = input[i].split(" ").map(Number);
  current -= out;
  current += inCount;
  max = Math.max(max, current);
}

console.log(max);