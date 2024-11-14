const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function getPrize(array) {
  const [n1, n2, n3] = array.split(" ").map(Number);

  if (n1 === n2 && n2 === n3) return n1 * 1000 + 10000;
  else if (n1 === n2 || n1 === n3) return n1 * 100 + 1000;
  else if (n2 === n3) return n2 * 100 + 1000;
  else return Math.max(n1, n2, n3) * 100;
}

const N = Number(input[0]);
const result = [];

for (let i = 1; i <= N; i++) {
  result.push(getPrize(input[i]));
}

console.log(Math.max(...result));