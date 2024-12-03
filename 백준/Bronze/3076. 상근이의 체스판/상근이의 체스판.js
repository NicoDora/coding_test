const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const [A, B] = input[1].split(" ").map(Number);
let result = "";

for (let x = 0; x < R; x++) {
  let count = x % 2;
  let row = "";

  for (let y = 0; y < C * B; y++) {
    if (count % 2 === 0) row += "X";
    else row += ".";
    if ((y + 1) % B === 0) count++;
  }

  for (let i = 0; i < A; i++) {
    result += row + "\n";
  }
}

console.log(result);