const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const set = new Set();
let count = 0;

for (let i = 1; i <= N; i++) {
  const user = input[i];
  if (user === "ENTER") set.clear();
  else if (!set.has(user)) {
    set.add(user);
    count++;
  }
}

console.log(count);