const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function brightenAll(height) {
  let prevEnd = 0;

  for (let i = 0; i < M; i++) {
    const pos = x[i];

    if (pos - height > prevEnd) return false;

    prevEnd = pos + height;
  }

  return prevEnd >= N;
}

function getHeight(low, high) {
  let result = N;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (brightenAll(mid)) {
      result = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return result;
}

const N = Number(input[0]);
const M = Number(input[1]);
const x = input[2].split(" ").map(Number);

let low = 1;
let high = N;

console.log(getHeight(low, high));