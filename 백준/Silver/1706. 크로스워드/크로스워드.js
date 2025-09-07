const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const puzzle = input.slice(1).map((row) => row.split(""));
const words = [];

for (let i = 0; i < R; i++) {
  let rowString = "";

  for (let j = 0; j < C; j++) {
    rowString += puzzle[i][j];
  }

  const rowWords = rowString.split("#").filter((word) => word.length > 1);

  for (const word of rowWords) {
    words.push(word);
  }
}

for (let i = 0; i < C; i++) {
  let colString = "";

  for (let j = 0; j < R; j++) {
    colString += puzzle[j][i];
  }

  const colWords = colString.split("#").filter((word) => word.length > 1);

  for (const word of colWords) {
    words.push(word);
  }
}

console.log(words.sort()[0]);