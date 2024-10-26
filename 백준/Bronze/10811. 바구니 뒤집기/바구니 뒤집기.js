const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [baguniSize, loop] = input[0].split(" ").map(Number);
const baguni = Array.from({ length: baguniSize }, (_, i) => i + 1);

function reverseArrayByStartEnd(array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}

for (let i = 1; i <= loop; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  reverseArrayByStartEnd(baguni, start - 1, end - 1);
}

console.log(baguni.join(" "));