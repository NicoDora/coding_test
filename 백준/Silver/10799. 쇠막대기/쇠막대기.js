const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

let stick = 0;
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") stick++;
  else if (input[i] === ")" && input[i - 1] === "(") {
    stick--;
    count += stick;
  } else {
    stick--;
    count++;
  }
}

console.log(count);