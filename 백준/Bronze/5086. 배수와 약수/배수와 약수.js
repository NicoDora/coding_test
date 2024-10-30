const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

for (let i = 0; i < input.length - 1; i++) {
  const [num1, num2] = input[i].split(" ").map(Number);

  if (num2 % num1 === 0) {
    result += "factor\n";
  } else if (num1 % num2 === 0) {
    result += "multiple\n";
  } else {
    result += "neither\n";
  }
}

console.log(result);