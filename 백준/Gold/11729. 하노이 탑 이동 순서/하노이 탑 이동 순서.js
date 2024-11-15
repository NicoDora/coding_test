const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

function printMove(start, goal) {
  count++;
  result += `${start} ${goal}\n`;
}

function hanoi(N, start, goal, temp) {
  if (N === 1) printMove(start, goal);
  else {
    hanoi(N - 1, start, temp, goal);
    printMove(start, goal);
    hanoi(N - 1, temp, goal, start);
  }
}

let result = "";
let count = 0;

hanoi(N, 1, 3, 2);

console.log(`${count}\n${result}`);