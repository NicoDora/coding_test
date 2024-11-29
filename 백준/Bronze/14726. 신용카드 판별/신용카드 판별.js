const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function luhn(num) {
  let sum = 0;

  for (let i = 15; i >= 0; i--) {
    if (i % 2 === 0) {
      let x = Number(num[i]) * 2;
      if (x >= 10) {
        x = Number(String(x)[0]) + Number(String(x)[1]);
      }
      sum += x;
    } else sum += Number(num[i]);
  }

  if (sum % 10 === 0) return "T";
  else return "F";
}

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  result.push(luhn(input[i]));
}

console.log(result.join("\n"));