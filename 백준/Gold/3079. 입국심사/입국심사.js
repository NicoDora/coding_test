const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function binarySearch(start, end) {
  let result = 0n;

  while (start <= end) {
    const mid = (start + end) / 2n;
    const canProcess = checkProcess(mid);

    if (canProcess >= M) {
      result = mid;
      end = mid - 1n;
    } else start = mid + 1n;
  }

  return result;
}

function checkProcess(time) {
  let total = 0n;

  for (let i = 0; i < N; i++) {
    total += time / BigInt(times[i]);
  }

  return total;
}

const [N, M] = input[0].split(" ").map(BigInt);
const times = input.slice(1).map(Number);
const min = BigInt(Math.min(...times));

console.log(String(binarySearch(min, min * M)));