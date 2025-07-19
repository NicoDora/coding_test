const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let result = Number(input[0]);

for (let i = 1; i < input.length - 2; i += 2) {
  const op = input[i];
  const num = Number(input[i + 1]);

  if (op === "+") result = Math.floor(result + num);
  else if (op === "-") result = Math.floor(result - num);
  else if (op === "*") result = Math.floor(result * num);
  else result = Math.floor(result / num);
}

console.log(result);