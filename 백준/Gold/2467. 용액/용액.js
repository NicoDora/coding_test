const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
let min = 2000000000;
let start = 0;
let end = N - 1;
let n1 = 0;
let n2 = 0;

while (start < end) {
  const sum = array[start] + array[end];

  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    n1 = array[start];
    n2 = array[end];
  }

  if (sum < 0) start++;
  else end--;
}

console.log(n1, n2);