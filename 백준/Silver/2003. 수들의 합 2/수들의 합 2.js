const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
let start = 0;
let end = 0;
let currentSum = 0;
let count = 0;

while (end <= N) {
  if (currentSum >= M) {
    if (currentSum === M) count++;
    currentSum -= array[start++];
  } else {
    if (end < N) currentSum += array[end];
    end++;
  }
}

console.log(count);