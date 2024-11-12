const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const array = Array.from({ length: N }, (v, i) => i + 1);
let startPointer = 0;

while (startPointer < array.length - 1) {
  startPointer++;
  array.push(array[startPointer]);
  startPointer++;
}

console.log(array[startPointer]);