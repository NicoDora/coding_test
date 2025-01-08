const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const player = input[1].split(" ").map(Number);
const joined = Array(1000001).fill(false);
const result = Array(N).fill(0);
const index = [];

for (let i = 0; i < N; i++) {
  joined[player[i]] = true;
  index[player[i]] = i;
}

for (let i = 0; i < N; i++) {
  let num = player[i];

  for (let j = 2; num * j <= 1000000; j++) {
    let multiple = num * j;

    if (joined[multiple]) {
      result[i]++;
      result[index[multiple]]--;
    }
  }
}

console.log(result.join(" "));