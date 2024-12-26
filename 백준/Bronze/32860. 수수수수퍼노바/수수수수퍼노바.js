const fs = require("fs");
let [N, M] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

let order = "";

if (M < 27) {
  order = String.fromCharCode(M + 64);
} else {
  let count = 0;

  while (M > 26) {
    M -= 26;
    count++;
  }
  order = String.fromCharCode(count + 96) + String.fromCharCode(M + 96);
}

console.log(`SN ${N}${order}`);