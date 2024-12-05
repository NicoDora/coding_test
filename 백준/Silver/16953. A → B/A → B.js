const fs = require("fs");
let [A, B] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

let count = 0;

while (B > A) {
  if (B % 10 === 1) B = Math.floor(B / 10);
  else if (B % 2 === 0) B /= 2;
  else break;
  count++;
}

console.log(A === B ? ++count : -1);