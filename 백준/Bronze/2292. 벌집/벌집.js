const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let weight = 1;
let i = 1;

while (Number(input) > weight) {
  weight += 6 * i;
  i++;
}

console.log(i);