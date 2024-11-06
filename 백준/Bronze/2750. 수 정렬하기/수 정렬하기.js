const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.shift();

for (let i = 1; i < input.length; i++) {
  let j = i - 1,
    temp = input[i];

  while (j >= 0 && input[j] > temp) {
    input[j + 1] = input[j];
    j--;
  }
  input[j + 1] = temp;
}

console.log(input.join("\n"));