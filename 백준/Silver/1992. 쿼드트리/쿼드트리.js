const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const image = input.slice(1).map((row) => row.split("").map(Number));
let result = "";

function recursion(startX, startY, n) {
  const start = image[startX][startY];
  let mixed = false;

  for (let x = startX; x < startX + n; x++) {
    for (let y = startY; y < startY + n; y++) {
      if (start !== image[x][y]) {
        mixed = true;
        break;
      }
    }
    if (mixed) break;
  }

  if (mixed) {
    result += "(";

    const half = n / 2;
    recursion(startX, startY, half);
    recursion(startX, startY + half, half);
    recursion(startX + half, startY, half);
    recursion(startX + half, startY + half, half);

    result += ")";
  } else result += start;
}

recursion(0, 0, N);

console.log(result);