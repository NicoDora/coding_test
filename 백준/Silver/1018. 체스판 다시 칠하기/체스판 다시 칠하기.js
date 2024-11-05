const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function checkIncorrectParts(firstArray, secondArray) {
  let incorrectCount = 0;

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (firstArray[x][y] !== secondArray[x][y]) incorrectCount++;
    }
  }

  return incorrectCount;
}

const [height, width] = input[0].split(" ").map(Number);
const whiteBoard = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];
const blackBoard = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];
const inputBoard = [];

for (let i = 1; i <= height; i++) {
  inputBoard.push(input[i].split(""));
}

const widthSliceLimit = width - 7;
const heightSliceLimit = height - 7;
let incorrectArray = [];

for (let i = 0; i < heightSliceLimit; i++) {
  for (let j = 0; j < widthSliceLimit; j++) {
    const subBoard = inputBoard
      .slice(i, i + 8)
      .map((row) => row.slice(j, j + 8));

    incorrectArray.push(checkIncorrectParts(subBoard, whiteBoard));
    incorrectArray.push(checkIncorrectParts(subBoard, blackBoard));
  }
}

console.log(Math.min(...incorrectArray));