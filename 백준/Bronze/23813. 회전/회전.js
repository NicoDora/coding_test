const fs = require("fs");
const N = BigInt(fs.readFileSync(0, "utf-8").toString().trim());

let numArray = String(N).split("");
let sum = 0n;

for (let i = 0; i < numArray.length; i++) {
  numArray.unshift(numArray[numArray.length - 1]);
  numArray.pop();

  sum += BigInt(numArray.join(""));
}

console.log(String(sum));