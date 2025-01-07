const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function getSmallerIndex(num) {
  let start = 0;
  let end = tempLis.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (num <= tempLis[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const tempLis = [A[0]];
const index = [1];

for (let i = 1; i < N; i++) {
  const num = A[i];

  if (num > tempLis[tempLis.length - 1]) {
    tempLis.push(num);
    index.push(tempLis.length);
  } else {
    const smallerIndex = getSmallerIndex(num);

    tempLis[smallerIndex] = num;
    index.push(smallerIndex + 1);
  }
}

const lis = [];
let now = tempLis.length;

for (let i = index.length - 1; i >= 0; i--) {
  if (index[i] === now) {
    lis.push(A[i]);
    now--;
  }
}

console.log(lis.length + "\n" + lis.reverse().join(" "));