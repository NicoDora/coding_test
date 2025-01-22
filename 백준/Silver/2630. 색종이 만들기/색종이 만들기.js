const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function checkSameColor(startX, startY, size) {
  const color = paper[startX][startY];
  let isSame = true;

  for (let i = startX; i < startX + size; i++) {
    for (let j = startY; j < startY + size; j++) {
      if (color !== paper[i][j]) {
        isSame = false;
        break;
      }
    }
    if (!isSame) break;
  }

  if (isSame) {
    if (color === 0) white++;
    else blue++;
  } else {
    const half = size / 2;

    checkSameColor(startX, startY, half); // 1사분면
    checkSameColor(startX, startY + half, half); // 2사분면
    checkSameColor(startX + half, startY, half); // 3사분면
    checkSameColor(startX + half, startY + half, half); // 4사분면
  }
}

const N = Number(input[0]);
const paper = input.slice(1).map((row) => row.split(" ").map(Number));
let white = 0;
let blue = 0;

checkSameColor(0, 0, N);

console.log(white + "\n" + blue);