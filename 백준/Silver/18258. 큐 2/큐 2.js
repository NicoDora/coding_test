const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function command(cmd, x) {
  switch (cmd) {
    case "push":
      queue.push(x);
      endPointer++;
      return null;
    case "pop":
      if (startPointer === endPointer) return -1;
      const value = queue[startPointer];
      startPointer++;
      return value;
    case "size":
      return endPointer - startPointer;
    case "empty":
      return endPointer - startPointer ? 0 : 1;
    case "front":
      return startPointer === endPointer ? -1 : queue[startPointer];
    case "back":
      return startPointer === endPointer ? -1 : queue[endPointer - 1];
  }
}

const N = input.shift();
const queue = [];
const result = [];
let startPointer = 0,
  endPointer = 0;

for (let i = 0; i < N; i++) {
  const [cmd, x] = input[i].split(" ");
  result.push(command(cmd, x));
}

console.log(result.filter((e) => e !== null).join("\n"));