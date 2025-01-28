const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const string = input[0];
const word = input[1];
const stack = [];

for (let i = 0; i < string.length; i++) {
  stack.push(string[i]);

  if (stack.length >= word.length) {
    const end = stack.slice(-word.length).join("");

    if (end === word) {
      for (let j = 0; j < word.length; j++) {
        stack.pop();
      }
    }
  }
}

console.log(stack.length ? stack.join("") : "FRULA");