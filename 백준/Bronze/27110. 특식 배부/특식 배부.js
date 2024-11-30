const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const array = [...input[1].split(" ").map(Number)];
let sum = 0;

for (let i = 0; i < 3; i++) {
  if (N >= array[i]) sum += array[i];
  else sum += N;
}

console.log(sum);