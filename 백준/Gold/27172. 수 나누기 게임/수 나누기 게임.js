const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const player = input[1].split(" ").map(Number);
const index = Array(1000001).fill(-1);
const result = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  index[player[i]] = i;
}

for (let i = 0; i < N; i++) {
  let num = player[i];

  for (let j = num * 2; j <= 1000000; j += num) {
    if (index[j] !== -1) {
      result[i]++;
      result[index[j]]--;
    }
  }
}

console.log(result.join(" "));