const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let i = 2;

while (N !== 1) {
  if (N % i === 0) {
    console.log(i);
    N = N / i;
  } else {
    i++;
  }
}