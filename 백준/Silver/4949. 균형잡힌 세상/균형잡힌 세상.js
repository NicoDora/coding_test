const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function isVPS(str) {
  const array = [];

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "(") array.push("(");
    else if (str[i] === "[") array.push("[");
    else if (str[i] === ")") {
      if (array.length === 0 || array[array.length - 1] !== "(") return "no";
      array.pop();
    } else if (str[i] === "]") {
      if (array.length === 0 || array[array.length - 1] !== "[") return "no";
      array.pop();
    }
  }
  return array.length === 0 ? "yes" : "no";
}

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  result.push(isVPS(input[i]));
}

console.log(result.join("\n"));