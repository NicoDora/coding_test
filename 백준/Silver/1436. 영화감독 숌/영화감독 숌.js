const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let count = 0;
let recentNumber = 666;

while (input > count) {
  const countSix = String(recentNumber).includes("666");
  if (countSix) count++;
  recentNumber++;
}

console.log(--recentNumber);