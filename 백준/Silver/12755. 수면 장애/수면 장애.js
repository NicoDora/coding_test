const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

let digit = 1;
let count = 9;
let startNum = 1;
let num = N;

while (num > digit * count) {
  num -= digit * count;
  digit++;
  count *= 10;
  startNum *= 10;
}

let targetNum = startNum + Math.floor((num - 1) / digit);
let targetDigit = (num - 1) % digit;

console.log(String(targetNum)[targetDigit]);