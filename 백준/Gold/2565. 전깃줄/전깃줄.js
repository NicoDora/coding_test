const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function binarySearch(num) {
  let start = 0;
  let end = lis.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (lis[mid] < num) start = mid + 1;
    else end = mid - 1;
  }

  return start;
}

const N = Number(input[0]);
const wireB = input
  .slice(1)
  .map((row) => row.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0])
  .map((line) => line[1]);
const lis = [wireB[0]];

for (let i = 1; i < N; i++) {
  const num = wireB[i];

  if (num > lis[lis.length - 1]) lis.push(num);
  else lis[binarySearch(num)] = num;
}

console.log(wireB.length - lis.length);