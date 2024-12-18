const fs = require("fs");
let [L, A, B, C, D] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

while (A > 0 || B > 0) {
  A -= C;
  B -= D;
  L--;
}

console.log(L);