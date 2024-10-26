const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input[0];
const numbers = input[1];
let result = 0;

for (let i = 0; i < count; i++) {
  result += Number(numbers[i]);
}

console.log(result);