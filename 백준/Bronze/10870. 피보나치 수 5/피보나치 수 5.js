const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function fibonacci(n) {
  if (array.length > n) return array[n];
  array.push(array[array.length - 1] + array[array.length - 2]);

  return fibonacci(n);
}

const array = [0, 1];

console.log(fibonacci(input));