const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function init(node, left, right) {
  if (left === right) {
    tree[node] = [array[left], array[left]];
    return tree[node];
  }

  const mid = Math.floor((left + right) / 2);
  const leftChild = init(node * 2, left, mid);
  const rightChild = init(node * 2 + 1, mid + 1, right);
  tree[node] = [
    Math.min(leftChild[0], rightChild[0]),
    Math.max(leftChild[1], rightChild[1]),
  ];

  return tree[node];
}

function query(node, left, right, ql, qr) {
  if (ql > right || qr < left) return [Infinity, -Infinity];
  if (ql <= left && qr >= right) return tree[node];

  const mid = Math.floor((left + right) / 2);
  const leftChild = query(node * 2, left, mid, ql, qr);
  const rightChild = query(node * 2 + 1, mid + 1, right, ql, qr);

  return [
    Math.min(leftChild[0], rightChild[0]),
    Math.max(leftChild[1], rightChild[1]),
  ];
}

const [N, M] = input[0].split(" ").map(Number);
const array = input.slice(1, N + 1).map(Number);
const range = input.slice(N + 1).map((row) => row.split(" ").map(Number));
const tree = Array.from({ length: N * 4 }, () => [Infinity, 0]);
const result = [];

init(1, 0, N - 1);

for (let i = 0; i < M; i++) {
  result.push(query(1, 0, N - 1, range[i][0] - 1, range[i][1] - 1));
}

console.log(result.map((row) => row.join(" ")).join("\n"));