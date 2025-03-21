const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const blocks = input[1].split(" ").map(Number);
let left = 0;
let right = 0;
let result = 0;

for (let i = 1; i < W - 1; i++) {
  left = Math.max(...blocks.slice(0, i));
  right = Math.max(...blocks.slice(i + 1));

  if (blocks[i] >= left || blocks[i] >= right) continue;

  if (left <= right) result += left - blocks[i];
  else result += right - blocks[i];
}

console.log(result);