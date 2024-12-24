const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function DSLR(num, commend) {
  switch (commend) {
    case "D":
      return (num * 2) % 10000;
    case "S":
      return (num + 9999) % 10000;
    case "L":
      return (num % 1000) * 10 + Math.floor(num / 1000);
    case "R":
      return (num % 10) * 1000 + Math.floor(num / 10);
    default:
      return num;
  }
}

const T = Number(input[0]);
const cmds = ["D", "S", "L", "R"];
const result = [];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  // [정수, 명령어]
  const queue = [[A, ""]];
  const visited = Array(10000).fill(false);

  for (let j = 0; j < queue.length; j++) {
    const [num, beforeCmd] = queue[j];

    if (num === B) {
      result.push(beforeCmd);
      break;
    }

    for (let k = 0; k < 4; k++) {
      const currentCmd = cmds[k];
      const nextNum = DSLR(num, currentCmd);

      if (!visited[nextNum]) {
        queue.push([nextNum, beforeCmd + currentCmd]);
        visited[nextNum] = true;
      }
    }
  }
}

console.log(result.join("\n"));