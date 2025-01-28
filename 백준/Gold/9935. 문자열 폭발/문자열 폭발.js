const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const string = input[0];
const word = input[1];
const stack = [];

for (let i = 0; i < string.length; i++) {
  stack.push(string[i]);

  if (stack.length >= word.length) {
    let isBomb = true;

    for (let j = 0; j < word.length; j++) {
      if (stack[stack.length - word.length + j] !== word[j]) {
        isBomb = false;
        break;
      }
    }

    if (isBomb) {
      for (let j = 0; j < word.length; j++) stack.pop();
    }
  }
}

console.log(stack.length ? stack.join("") : "FRULA");