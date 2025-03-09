const fs = require("fs");
const [N, ...children] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

function binarySearch(num) {
  let start = 0;
  let end = lis.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (num <= lis[mid]) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}

const lis = [children[0]];

for (let i = 1; i < N; i++) {
  const child = children[i];

  if (child > lis[lis.length - 1]) lis.push(child);
  else lis[binarySearch(child)] = child;
}

console.log(N - lis.length);