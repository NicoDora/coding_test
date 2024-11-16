const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

let count = 0;

for (let a = 1; a <= N / 2; a++) {
  for (let b = a; b <= N - a - b; b++) {
    let c = N - a - b;
    if (a + b > c && a + c > b && b + c > a) count++;
  }
}

console.log(count);