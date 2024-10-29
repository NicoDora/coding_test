const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = Number(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++) {
  let change = input[i];

  const quarter = Math.floor(change / 25);
  change -= quarter * 25;

  const dime = Math.floor(change / 10);
  change -= dime * 10;

  const nickel = Math.floor(change / 5);
  change -= nickel * 5;

  const penny = change;
  result += `${quarter} ${dime} ${nickel} ${penny}\n`;
}

console.log(result);