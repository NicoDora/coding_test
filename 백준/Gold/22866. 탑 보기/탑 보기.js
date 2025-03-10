const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const heights = [0, ...input[1].split(" ").map(Number)];
let stack = [1];
const result = Array.from({ length: N + 1 }, () => [0, 0]); // [볼 수 있는 건물의 개수, 거리가 가장 가까운 건물]

// 건물 왼쪽
for (let i = 1; i <= N; i++) {
  while (stack.length && heights[stack[stack.length - 1]] <= heights[i]) {
    stack.pop();
  }

  result[i] = [stack.length, stack.length ? stack[stack.length - 1] : Infinity];

  stack.push(i);
}

stack = [];

// 건물 오른쪽
for (let i = N; i > 0; i--) {
  while (stack.length && heights[stack[stack.length - 1]] <= heights[i]) {
    stack.pop();
  }

  const [leftVisible, leftNearest] = result[i];

  result[i] = [
    leftVisible + stack.length,
    stack[stack.length - 1] - i < i - leftNearest
      ? stack[stack.length - 1]
      : leftNearest === Infinity
      ? stack[stack.length - 1]
      : leftNearest,
  ];

  stack.push(i);
}

console.log(
  result
    .slice(1)
    .map((row) => (row[0] ? row.join(" ") : 0))
    .join("\n")
);