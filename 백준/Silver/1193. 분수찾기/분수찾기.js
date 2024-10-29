const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let line = 1;
let arraySize = 1;

while (input > arraySize) {
  line++;
  arraySize += line;
}

const index = arraySize - input;
const result =
  line % 2 === 0
    ? `${line - index}/${1 + index}`
    : `${1 + index}/${line - index}`;

console.log(result);