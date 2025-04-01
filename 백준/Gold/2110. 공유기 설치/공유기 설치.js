const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function setRouter(distance) {
  let last = routers[0];
  let count = 1;

  for (let i = 1; i < N; i++) {
    if (routers[i] - last >= distance) {
      last = routers[i];
      count++;
    }
  }

  return count >= C;
}

function binarySearch(start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (setRouter(mid)) start = mid + 1;
    else end = mid - 1;
  }

  return end;
}

const [N, C] = input[0].split(" ").map(Number);
const routers = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

console.log(binarySearch(1, routers[N - 1] - routers[0]));