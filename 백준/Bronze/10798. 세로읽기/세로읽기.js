const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";
let colLength = [];

for (let i = 0; i < input.length; i++) {
  colLength.push(input[i].length);
}

const maxColLength = Math.max(...colLength);

for (let i = 0; i < maxColLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== undefined) {
      result += input[j][i];
    }
  }
}

console.log(result);