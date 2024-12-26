const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(value) {
    this.stack.push(value);
    this.length++;
  }

  pop() {
    if (!this.length) return -1;
    this.length--;
    return this.stack.pop();
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length ? 0 : 1;
  }

  top() {
    if (!this.length) return -1;
    return this.stack[this.length - 1];
  }
}

const N = Number(input[0]);
const stack = new Stack();
const result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, n] = input[i].split(" ");

  switch (cmd) {
    case "push":
      stack.push(Number(n));
      break;
    case "pop":
      result.push(stack.pop());
      break;
    case "size":
      result.push(stack.size());
      break;
    case "empty":
      result.push(stack.empty());
      break;
    case "top":
      result.push(stack.top());
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));