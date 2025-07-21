const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function check(length) {
  let sum = 0;
  let count = 1;

  for (const lecture of lectures) {
    if (lecture > length) return false;

    if (sum + lecture <= length) sum += lecture;
    else {
      if (count >= M) return false;

      count++;
      sum = lecture;
    }
  }

  return true;
}

function binarySearch(start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (check(mid)) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}

const [N, M] = input[0].split(" ").map(Number);
const lectures = input[1].split(" ").map(Number);
const min = lectures[N - 1];
const max = lectures.reduce((sum, n) => (sum += n), 0);

console.log(binarySearch(min, max));