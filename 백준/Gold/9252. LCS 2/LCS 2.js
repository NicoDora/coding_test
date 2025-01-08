const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const lenA = A.length;
const lenB = B.length;
const lcs = Array.from({ length: lenA + 1 }, () => Array(lenB + 1).fill(0));
const result = [];

for (let i = 1; i <= lenA; i++) {
  for (let j = 1; j <= lenB; j++) {
    if (A[i - 1] === B[j - 1]) lcs[i][j] = lcs[i - 1][j - 1] + 1;
    else lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
  }
}

let i = lenA;
let j = lenB;

while (lcs[i][j]) {
  if (lcs[i][j] === lcs[i - 1][j]) i--;
  else if (lcs[i][j] === lcs[i][j - 1]) j--;
  else {
    result.push(A[i - 1]);
    i--;
    j--;
  }
}

console.log(
  lcs[lenA][lenB] === 0
    ? lcs[lenA][lenB]
    : lcs[lenA][lenB] + "\n" + result.reverse().join("")
);