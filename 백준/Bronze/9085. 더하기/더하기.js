const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let i = 0; i < T; i++) {
  const N = Number(input[index++]);
  const array = input[index++].split(" ").map(Number);
  let sum = 0;

  for (let j = 0; j < N; j++) {
    sum += array[j];
  }

  result.push(sum);
}

console.log(result.join("\n"));