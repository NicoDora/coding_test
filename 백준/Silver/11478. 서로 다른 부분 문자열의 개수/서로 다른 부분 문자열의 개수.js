const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const set = new Set();

for (let start = 0; start < input.length; start++) {
  for (let end = start + 1; end <= input.length; end++) {
    set.add(input.slice(start, end));
  }
}

console.log(set.size);