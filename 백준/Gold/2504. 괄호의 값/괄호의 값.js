const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const stack = [];
let right = true;

for (const ch of input) {
  if (ch === "(" || ch === "[") stack.push(ch);
  else {
    let temp = 0;
    let matched = false;

    while (stack.length) {
      const top = stack.pop();

      if (typeof top === "number") temp += top;
      else if ((ch === ")" && top === "(") || (ch === "]" && top === "[")) {
        const multiplier = ch === ")" ? 2 : 3;

        stack.push(temp === 0 ? multiplier : temp * multiplier);
        matched = true;
        break;
      } else {
        right = false;
        break;
      }
    }

    if (!matched) {
      right = false;
      break;
    }
  }

  if (!right) break;
}

console.log(
  right && stack.every((n) => typeof n === "number")
    ? stack.reduce((sum, n) => sum + n, 0)
    : 0
);