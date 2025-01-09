const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const array = Array(N + 1).fill(1);
const prime = [];

array[0] = array[1] = 0;

// 에라토스테네스의 체
for (let i = 2; i <= Math.sqrt(N); i++) {
  if (array[i]) {
    for (let j = i * i; j <= N; j += i) {
      array[j] = 0;
    }
  }
}

for (let i = 2; i <= N; i++) {
  if (array[i]) prime.push(i);
}

let start = 0;
let end = 0;
let sum = 0;
let count = 0;

// 투 포인터
while (end <= prime.length) {
  if (sum < N) sum += prime[end++];
  else if (sum > N) sum -= prime[start++];
  else if (sum === N) {
    sum += prime[end++];
    count++;
  }
}

console.log(count);