const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(input));