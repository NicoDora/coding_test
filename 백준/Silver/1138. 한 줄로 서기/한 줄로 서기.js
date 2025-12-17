const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const tallerCount = input[1].split(" ").map(Number);
const position = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const count = tallerCount[i];
  let currentZeroCount = 0;

  for (let j = 0; j < N; j++) {
    if (position[j] === 0) {
      if (currentZeroCount === count) {
        position[j] = i + 1;
        break;
      }
      currentZeroCount++;
    }
  }
}

console.log(position.join(" "));