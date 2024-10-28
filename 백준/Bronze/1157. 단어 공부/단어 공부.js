const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const alphabetArray = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alphabetArray[input[i].charCodeAt() - 65] += 1;
}

const sortArray = [...alphabetArray].sort((a, b) => b - a);
let result = "";

if (sortArray[0] === sortArray[1]) {
  result = "?";
} else {
  result = String.fromCharCode(alphabetArray.indexOf(sortArray[0]) + 65);
}

console.log(result);