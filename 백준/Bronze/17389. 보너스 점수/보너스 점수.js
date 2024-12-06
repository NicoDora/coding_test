const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const string = input[1];
let bonus = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  const isCorrect = string[i] === "O" ? true : false;

  if (isCorrect) result += i + 1 + bonus++;
  else bonus = 0;
}

console.log(result);