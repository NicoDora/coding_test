const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let count = 0;

for (let i = N - 1; i >= 0; i--) {
  if (count === K) break;

  const array = A.slice(0, i);
  const max = Math.max(...array);
  const maxIndex = array.indexOf(max);

  if (max > A[i]) {
    [A[maxIndex], A[i]] = [A[i], A[maxIndex]];
    count++;
  }
}

if (count < K) console.log(-1);
else console.log(A.join(" "));