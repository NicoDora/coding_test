const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let weight = 1;
let i = 1;

if (Number(input) !== 1) {
  while (6 * i + weight < Number(input)) {
    weight += 6 * i;
    i++;
  }
  i++;
}

console.log(i);