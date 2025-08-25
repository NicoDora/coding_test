const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

function isPPAP(string) {
  return string.slice(-4, string.length).join("") === "PPAP";
}

const stack = [];
let string = input;
let result = "NP";

const length = string.length;

for (let i = 0; i < length; i++) {
  stack.push(string[i]);

  if (stack.length >= 4 && isPPAP(stack)) {
    for (let j = 0; j < 4; j++) {
      stack.pop();
    }

    stack.push("P");
  }
}

string = stack.join("");

if (string.length === 1 && string[0] === "P") result = "PPAP";

console.log(result);