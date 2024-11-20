const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").toString().trim();

let result = "";

if (input.length % 3 !== 0) {
  input = input.padStart(input.length + (3 - (input.length % 3)), "0");
}

for (let i = 0; i < input.length; i += 3) {
  result += parseInt(input.slice(i, i + 3), 2).toString(8);
}

console.log(result);