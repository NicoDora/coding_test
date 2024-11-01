const fs = require("fs");
let [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((a, b) => b - a);

if (a === b && a === c) {
  console.log(a * 3);
} else {
  if (a < b + c) {
    console.log(a + b + c);
  } else {
    a = b + c - 1;
    console.log(a + b + c);
  }
}