const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 문제 제출 시

const N = Number(input[0]);
let groupWordCount = N;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  let temp = [];

  for (let j = 0; j < word.length; j++) {
    const currentChar = word[j];
    const beforeChar = word[j - 1];

    if (currentChar !== beforeChar) {
      if (temp.includes(currentChar)) {
        groupWordCount--;
        break;
      } else {
        temp.push(currentChar);
      }
    }
  }
}

console.log(groupWordCount);