const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const result = [];

function calculate(a, b) {
  result.push(a + b);
  result.push(a - b);
  result.push(a * b);
  result.push(parseInt(a / b));
  result.push(a % b);
}

function printResult(result) {
  for (i in result) {
    console.log(result[i]);
  }
}

calculate(a, b);
printResult(result);