const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let divisor = [];

  for (let j = 0; j < Number(input[i]); j++) {
    if (Number(input[i]) % j === 0) {
      divisor.push(j);
    }
  }

  const isPerfect = divisor.reduce((p, c) => p + c) === Number(input[i]);

  if (isPerfect) {
    divisor.sort((a, b) => a - b);
    console.log(`${Number(input[i])} = ${divisor.join(" + ")}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}