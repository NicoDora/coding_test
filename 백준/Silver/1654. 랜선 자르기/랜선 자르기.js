const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function binarySearch(start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let i = 0; i < K; i++) {
      sum += Math.floor(cables[i] / mid);
    }

    if (sum >= N) start = mid + 1;
    else end = mid - 1;
  }

  return end;
}

const [K, N] = input[0].split(" ").map(Number);
const cables = input.slice(1).map(Number);

console.log(binarySearch(1, Math.max(...cables)));