const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function preorderTraversal(root) {
  const [left, right] = map.get(root);

  preorderResult += root;
  if (left === "." && right === ".") return;
  if (left !== ".") preorderTraversal(left);
  if (right !== ".") preorderTraversal(right);
}

function inorderTraversal(root) {
  const [left, right] = map.get(root);

  if (left === "." && right === ".") {
    inorderResult += root;
    return;
  }
  if (left !== ".") inorderTraversal(left);
  inorderResult += root;
  if (right !== ".") inorderTraversal(right);
}

function postorderTraversal(root) {
  const [left, right] = map.get(root);

  if (left === "." && right === ".") {
    postorderResult += root;
    return;
  }
  if (left !== ".") postorderTraversal(left);
  if (right !== ".") postorderTraversal(right);
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