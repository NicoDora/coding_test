const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const array = Array.from({ length: N }, (v, i) => i + 1);
const result = [];
let pointer = 0;

for (let i = 0; i < N; i++) {
  pointer = (pointer + K - 1) % array.length;
  result.push(array.splice(pointer, 1)[0]);
}

console.log(`<${result.join(", ")}>`);