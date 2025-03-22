const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);
const array = input[1].split(" ").map(Number);
let current = array[0];
let result = array[0];

for (let i = 1; i < n; i++) {
  current = Math.max(current + array[i], array[i]);
  result = Math.max(current, result);
}

console.log(result);