const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

// function binarySearch(start, end) {
//   if (start > end) return end;

//   const mid = Math.floor((start + end) / 2);
//   let sum = 0;

//   for (let i = 0; i < N; i++) {
//     if (mid < request[i]) sum += mid;
//     else sum += request[i];
//   }

//   if (sum > total) return binarySearch(start, mid - 1);
//   else return binarySearch(mid + 1, end);
// }

function binarySearch(start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      if (mid < request[i]) sum += mid;
      else sum += request[i];
    }

    if (sum > total) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}

const N = Number(input[0]);
const request = input[1].split(" ").map(Number);
const total = Number(input[2]);

console.log(binarySearch(0, Math.max(...request)));