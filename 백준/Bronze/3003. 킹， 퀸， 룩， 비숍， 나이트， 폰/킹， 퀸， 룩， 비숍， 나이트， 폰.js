const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const piece = [1, 1, 2, 2, 2, 8];
let result = "";

for (let i = 0; i < input.length; i++) {
  result += piece[i] - input[i] + " ";
}

console.log(result);