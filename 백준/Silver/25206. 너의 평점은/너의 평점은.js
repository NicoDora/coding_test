const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 문제 제출 시

let sum = 0;
let scoreTotalSum = 0;

const subjectAvgExample = {
  ".A+": 4.5,
  ".A0": 4.0,
  ".B+": 3.5,
  ".B0": 3.0,
  ".C+": 2.5,
  ".C0": 2.0,
  ".D+": 1.5,
  ".D0": 1.0,
  ".F": 0,
};

for (let i = 0; i < 20; i++) {
  const score = Number(input[i].split(" ")[1]);
  const subjectAvg = input[i].split(" ")[2];

  if (subjectAvg === "P") {
    continue;
  }

  scoreTotalSum += score;
  sum += score * subjectAvgExample["." + subjectAvg];
}

console.log(sum / scoreTotalSum);