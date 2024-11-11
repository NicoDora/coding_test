const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function isVPS(str) {
  const array = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") array.push(1);
    else {
      const pop = array.pop();
      if (pop === undefined) return "NO";
    }
  }

  return array.length === 0 ? "YES" : "NO";
}

const T = Number(input.shift());
const result = [];

for (let i = 0; i < T; i++) {
  result.push(isVPS(input[i]));
}

console.log(result.join("\n"));