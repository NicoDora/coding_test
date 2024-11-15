const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const board = input[1];
const M = Number(input[2]);
const S = input[3];

let pointer = N - 1;
let count = 0;

for (let i = 0; i < M; i++) {
  const targetChar = S[i];
  let step = 0;

  do {
    pointer = (pointer + 1) % N;
    step++;

    if (step > N) {
      count = -1;
      break;
    }
  } while (board[pointer] !== targetChar);

  if (count === -1) break;

  count += step;
}

console.log(count);