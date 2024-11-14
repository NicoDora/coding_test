const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function cantor(str) {
  if (str.length === 1) return str;

  const partLength = str.length / 3;

  const firstPart = cantor(str.slice(0, partLength));
  const middlePart = " ".repeat(partLength);
  const lastPart = cantor(str.slice(partLength * 2));

  return firstPart + middlePart + lastPart;
}

const result = [];

for (N of input) {
  const str = "-".repeat(3 ** N);
  result.push(cantor(str));
}

console.log(result.join("\n"));