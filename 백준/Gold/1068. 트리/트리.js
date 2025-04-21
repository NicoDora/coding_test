const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function countLeafNode(node) {
  const validChildren = children[node].filter((node) => node !== removedNode);

  if (!validChildren.length) return 1;

  let sum = 0;

  for (const next of validChildren) {
    sum += countLeafNode(next);
  }

  return sum;
}

const N = Number(input[0]);
const parent = input[1].split(" ").map(Number);
const children = Array.from({ length: N }, () => []);
const rootNode = parent.findIndex((p) => p === -1);
const removedNode = Number(input[2]);

for (let i = 0; i < N; i++) {
  if (parent[i] === -1) continue;
  children[parent[i]].push(i);
}
if (rootNode === removedNode) console.log(0);
else console.log(countLeafNode(rootNode));