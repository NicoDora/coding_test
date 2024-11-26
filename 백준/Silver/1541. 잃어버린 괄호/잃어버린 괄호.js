const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("-");

function sum(group) {
  const splitGroup = group.split("+");
  let sum = 0;

  for (let i = 0; i < splitGroup.length; i++) {
    sum += Number(splitGroup[i]);
  }

  return sum;
}

let result = sum(input[0]);

for (let i = 1; i < input.length; i++) {
  result -= sum(input[i]);
}

console.log(result);