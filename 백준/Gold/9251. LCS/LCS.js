const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const lenA = A.length;
const lenB = B.length;
const matrix = Array.from({ length: lenA + 1 }, () => Array(lenB + 1).fill(0));

for (let i = 1; i <= lenA; i++) {
  const wordA = A[i - 1];

  for (let j = 1; j <= lenB; j++) {
    const wordB = B[j - 1];

    if (wordA === wordB) matrix[i][j] = matrix[i - 1][j - 1] + 1;
    else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
  }
}

console.log(matrix[lenA][lenB]);