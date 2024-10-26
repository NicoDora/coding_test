const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [firstNum, secondNum] = input;
const [reverseFirstNum, reverseSecondNum] = [
  Number([...firstNum].reverse().join("")),
  Number([...secondNum].reverse().join("")),
];
const result = Math.max(reverseFirstNum, reverseSecondNum);

console.log(result);