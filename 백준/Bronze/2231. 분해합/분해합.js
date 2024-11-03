const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let limit = String(input).length * 9;
let result = 0;

for (let num = input - limit; num < input; num++) {
  let digitSum = 0;
  for (let i of String(num)) {
    digitSum += Number(i);
  }
  if (num + digitSum === input) {
    result = num;
    break;
  }
}

if (result) {
  console.log(result);
} else {
  console.log(0);
}