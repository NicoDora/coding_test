const fs = require("fs");
let N = BigInt(fs.readFileSync(0, "utf-8").toString().trim());

let count = 0n;

while (N > 0) {
  if (N % 5n === 0n) {
    count += N / 5n;
    break;
  }

  N -= 3n;
  count++;
}

if (N < 0) count = -1n;

console.log(String(count));