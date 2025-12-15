const fs = require("fs");
const K = Number(fs.readFileSync(0, "utf-8").toString().trim());

const minSize = 2 ** Math.ceil(Math.log2(K));
let currentSize = minSize;
let count = 0;

while (K % currentSize !== 0) {
  currentSize = currentSize >> 1;
  count++;
}

console.log(minSize, count);