const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

function printStar(array, x, y, size) {
  if (size === 1) return;

  const partSize = size / 3;

  for (let i = x + partSize; i < x + partSize * 2; i++) {
    for (let j = y + partSize; j < y + partSize * 2; j++) {
      array[i][j] = " ";
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i !== 1 || j !== 1)
        printStar(array, x + i * partSize, y + j * partSize, partSize);
    }
  }
}

const array = Array.from(Array(N), () => Array(N).fill("*"));
const result = [];

printStar(array, 0, 0, N);

for (let i = 0; i < N; i++) {
  result.push(array[i].join(""));
}

console.log(result.join("\n"));