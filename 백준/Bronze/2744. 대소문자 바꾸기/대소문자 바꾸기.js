const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt() < 97)
    result.push(String.fromCharCode(input[i].charCodeAt() + 32));
  else result.push(String.fromCharCode(input[i].charCodeAt() - 32));
}

console.log(result.join(""));