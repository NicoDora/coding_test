const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
let start = 0;
let end = 0;
let currentSum = 0;
let minLength = Infinity;

while (end <= N) {
  if (currentSum < S) {
    if (end < N) currentSum += array[end];
    end++;
  } else {
    minLength = Math.min(minLength, end - start);
    currentSum -= array[start];
    start++;
  }
}

console.log(minLength === Infinity ? 0 : minLength);