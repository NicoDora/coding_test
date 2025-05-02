const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

function findNextGreater() {
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && input[i] > input[stack[stack.length - 1]]) {
      nextGreater[stack.pop()] = i;
    }

    stack.push(i);
  }
}

function postOrder(start, end) {
  if (start > end) return;

  let split = nextGreater[start];
  if (split === -1 || split > end) split = end + 1;

  postOrder(start + 1, split - 1); // left
  postOrder(split, end); // right
  tree.push(input[start]); // root
}

const N = input.length;
const tree = [];
const nextGreater = Array(N).fill(-1);

findNextGreater();
postOrder(0, N - 1);

console.log(tree.join("\n"));