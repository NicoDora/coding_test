const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function getSmallerIndex(element) {
  // 이진 탐색
  let start = 0;
  let end = lis.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (element <= lis[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const lis = [array[0]];

for (let i = 1; i < N; i++) {
  const element = array[i];
  if (element > lis[lis.length - 1]) lis.push(element);
  else {
    const smallerIndex = getSmallerIndex(element);
    lis[smallerIndex] = element;
  }
}

console.log(lis.length);