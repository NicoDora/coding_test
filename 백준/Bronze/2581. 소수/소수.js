const fs = require("fs");
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const array = new Array(N + 1).fill(1);
array[0] = array[1] = 0;

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (array[i] === 0) continue;

  for (let multiple = i * i; multiple <= N; multiple += i) {
    array[multiple] = 0;
  }
}

const primeArray = [];

for (let i = M; i <= N; i++) {
  if (array[i] === 1) {
    primeArray.push(i);
  }
}

if (primeArray.length) {
  console.log(primeArray.reduce((p, c) => p + c));
  console.log(primeArray[0]);
} else {
  console.log(-1);
}