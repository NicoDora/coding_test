const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function getCount(startX, startY, size) {
  let num = paper[startX][startY];
  let isSame = true;

  for (let i = startX; i < startX + size; i++) {
    for (let j = startY; j < startY + size; j++) {
      if (num !== paper[i][j]) {
        isSame = false;
        break;
      }
    }

    if (!isSame) break;
  }

  if (isSame) {
    if (num === -1) result[0]++;
    else if (num === 0) result[1]++;
    else if (num === 1) result[2]++;
  } else {
    const part = size / 3;

    getCount(startX, startY, part); // (0, 0)
    getCount(startX, startY + part, part); // (0, 1)
    getCount(startX, startY + part * 2, part); // (0, 2)
    getCount(startX + part, startY, part); // (1, 0)
    getCount(startX + part, startY + part, part); // (1, 1)
    getCount(startX + part, startY + part * 2, part); // (1, 2)
    getCount(startX + part * 2, startY, part); // (2, 0)
    getCount(startX + part * 2, startY + part, part); // (2, 1)
    getCount(startX + part * 2, startY + part * 2, part); // (2, 2)
  }
}

const N = Number(input[0]);
const paper = input.slice(1).map((row) => row.split(" ").map(Number));
const result = [0, 0, 0];

getCount(0, 0, N);

console.log(result.join("\n"));