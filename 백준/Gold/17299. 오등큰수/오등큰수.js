const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const count = Array(1000001).fill(0);
const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  count[A[i]]++;
}

stack.push(A.pop());
result.push(-1);

for (let i = N - 2; i >= 0; i--) {
  const current = A[i];

  if (count[stack[stack.length - 1]] > count[current]) {
    result.push(stack[stack.length - 1]);
    stack.push(current);
  } else {
    while (
      stack.length !== 0 &&
      count[stack[stack.length - 1]] <= count[current]
    ) {
      stack.pop();
    }

    if (stack.length === 0) result.push(-1);
    else result.push(stack[stack.length - 1]);
    stack.push(current);
  }
}

console.log(result.reverse().join(" "));