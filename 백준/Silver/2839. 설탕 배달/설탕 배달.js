const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let count = 0;

while (input > 0) {
  if (input % 5 === 0) {
    count += input / 5;
    break;
  }

  input -= 3;
  count++;
}

if (input < 0) {
  console.log(-1);
} else {
  console.log(count);
}