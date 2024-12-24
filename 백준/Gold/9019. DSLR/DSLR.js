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
const result = [];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  // [정수, 명령어]
  const queue = [[A, ""]];
  const visited = Array(10000).fill(false);

  let front = 0;

  while (queue.length > front) {
    const [num, beforeCmd] = queue[front++];

    if (num === B) {
      result.push(beforeCmd);
      break;
    }

    for (const currentCmd of ["D", "S", "L", "R"]) {
      const nextNum = DSLR(num, currentCmd);

      if (!visited[nextNum]) {
        queue.push([nextNum, beforeCmd + currentCmd]);
        visited[nextNum] = true;
      }
    }
  }
}

console.log(result.join("\n"));