const fs = require("fs");
const input = Number(fs.readFileSync(0, "utf-8").toString().trim());

let change = 1000 - input;
let count = 0;

for (yen of [500, 100, 50, 10, 5, 1]) {
  count += Math.floor(change / yen);
  change %= yen;
}

console.log(count);