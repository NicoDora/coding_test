const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function preorderTraversal(root) {
  if (root === ".") return;

  const [left, right] = map.get(root);

  preorderResult += root;
  preorderTraversal(left);
  preorderTraversal(right);
}

function inorderTraversal(root) {
  if (root === ".") return;

  const [left, right] = map.get(root);

  inorderTraversal(left);
  inorderResult += root;
  inorderTraversal(right);
}

function postorderTraversal(root) {
  if (root === ".") return;

  const [left, right] = map.get(root);

  postorderTraversal(left);
  postorderTraversal(right);
  postorderResult += root;
}

const N = Number(input[0]);
const map = new Map();
let preorderResult = "";
let inorderResult = "";
let postorderResult = "";

for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i].split(" ");
  map.set(node, [left, right]);
}

preorderTraversal("A");
inorderTraversal("A");
postorderTraversal("A");

console.log(preorderResult + "\n" + inorderResult + "\n" + postorderResult);