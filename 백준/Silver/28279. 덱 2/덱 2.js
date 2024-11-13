const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function program(cmd, x) {
  switch (cmd) {
    case 1:
      deck[--startPointer] = x;
      return null;
    case 2:
      deck[endPointer++] = x;
      return null;
    case 3:
      return startPointer < endPointer ? deck[startPointer++] : -1;
    case 4:
      return startPointer < endPointer ? deck[--endPointer] : -1;
    case 5:
      return endPointer - startPointer;
    case 6:
      return startPointer === endPointer ? 1 : 0;
    case 7:
      return startPointer < endPointer ? deck[startPointer] : -1;
    case 8:
      return startPointer < endPointer ? deck[endPointer - 1] : -1;
  }
}

const N = Number(input[0]);
const deck = [];
const result = [];
let startPointer = 0;
let endPointer = 0;

for (let i = 1; i <= N; i++) {
  const [cmd, x] = input[i].split(" ").map(Number);
  result.push(program(cmd, x));
}

console.log(result.filter((e) => e !== null).join("\n"));