const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let colsMaxArray = [];
let colMaxIndexArray = [];

for (let i = 0; i < 9; i++) {
  const col = input[i].split(" ").map(Number);
  const colMax = Math.max(...col);
  colsMaxArray.push(colMax);
  colMaxIndexArray.push(`${i + 1} ${col.indexOf(colMax) + 1}`);
}

const arrayMaxValue = Math.max(...colsMaxArray);
const arrayMaxIndex = colMaxIndexArray[colsMaxArray.indexOf(arrayMaxValue)];

console.log(arrayMaxValue);
console.log(arrayMaxIndex);