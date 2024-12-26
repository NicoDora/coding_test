const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const paper = input.slice(1).map((line) => line.split(" ").map(Number));

const tetrominos = [
  // 일자 모양
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  // 정사각형 모양
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  // L자 모양
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [0, 0],
  ],
  // 번개 모양
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  // ㅗ 모양
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
];

let maxSum = 0;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    for (const tetromino of tetrominos) {
      let sum = 0;
      let valid = true;

      for (const [dx, dy] of tetromino) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= N || ny >= M) {
          valid = false;
          break;
        }

        sum += paper[nx][ny];
      }

      if (valid) maxSum = Math.max(maxSum, sum);
    }
  }
}

console.log(maxSum);