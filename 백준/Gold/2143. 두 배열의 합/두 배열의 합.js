const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const n = Number(input[1]);
const A = input[2].split(" ").map(Number);
const m = Number(input[3]);
const B = input[4].split(" ").map(Number);
const sumA = Array(n + 1).fill(0);
const sumB = Array(m + 1).fill(0);
const mapA = new Map();
const mapB = new Map();

// 누적 합 계산
for (let i = 1; i <= n; i++) {
  sumA[i] = sumA[i - 1] + A[i - 1];
}

for (let i = 1; i <= m; i++) {
  sumB[i] = sumB[i - 1] + B[i - 1];
}

// 부 배열의 합 모두 계산
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    const subSum = sumA[j] - sumA[i - 1];
    mapA.set(subSum, (mapA.get(subSum) || 0) + 1);
  }
}

for (let i = 1; i <= m; i++) {
  for (let j = i; j <= m; j++) {
    const subSum = sumB[j] - sumB[i - 1];
    mapB.set(subSum, (mapB.get(subSum) || 0) + 1);
  }
}

let count = 0;

mapA.forEach((value, key) => {
  if (mapB.has(T - key)) {
    count += value * mapB.get(T - key);
  }
});

console.log(count);