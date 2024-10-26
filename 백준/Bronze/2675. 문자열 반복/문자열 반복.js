const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = Number(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++) {
  const [count, string] = input[i].split(" ");

  for (let j = 0; j < string.length; j++) {
    for (let k = 0; k < Number(count); k++) {
      result += string[j];
    }
  }
  result += "\n";
}

console.log(result);