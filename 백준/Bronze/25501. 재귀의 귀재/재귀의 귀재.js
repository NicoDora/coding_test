const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function recursion(str, front, rear, count) {
  count++;
  if (front >= rear) return [1, count];
  else if (str[front] !== str[rear]) return [0, count];
  else return recursion(str, front + 1, rear - 1, count);
}

function isPalindrome(str, count) {
  return recursion(str, 0, str.length - 1, count);
}

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  let count = 0;
  result.push(isPalindrome(input[i], count).join(" "));
}

console.log(result.join("\n"));