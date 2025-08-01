const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(phoneNumber) {
    let node = this.root;

    for (const digit of phoneNumber) {
      if (!node.children[digit]) node.children[digit] = new Node();
      node = node.children[digit];
      if (node.isEnd) return false;
    }

    node.isEnd = true;
    return true;
  }
}

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[index++]);
  const trie = new Trie();
  const phoneNumbers = [];
  let isConsistent = true;

  for (let i = 0; i < N; i++) {
    phoneNumbers.push(input[index++]);
  }

  phoneNumbers.sort((a, b) => a - b);

  for (const phoneNumber of phoneNumbers) {
    if (!trie.insert(phoneNumber)) {
      isConsistent = false;
      break;
    }
  }

  result.push(isConsistent ? "YES" : "NO");
}

console.log(result.join("\n"));