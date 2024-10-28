const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim(); // 문제 제출 시

const croatiaAlphabet = input.match(/c=|c-|dz=|d-|lj|nj|s=|z=/g) || null;
let result = input.length;

if (croatiaAlphabet) {
  for (i of croatiaAlphabet) {
    result -= i.length - 1;
  }
}

console.log(result);