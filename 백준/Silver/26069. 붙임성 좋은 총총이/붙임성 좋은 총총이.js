const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const set = new Set(["ChongChong"]);

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ");

  if (set.has(A)) set.add(B);
  else if (set.has(B)) set.add(A);
}

console.log(set.size);