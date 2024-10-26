const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim(); // 문제 제출 시

const alphabetArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97)
);
let result = "";

for (let i = 0; i < alphabetArray.length; i++) {
  result += input.indexOf(alphabetArray[i]) + " ";
}

console.log(result);