const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const board = Array.from({ length: 4 }, () => Array(4).fill(0));
const logs = input.slice(1).map((line) => line.split(" ").map(Number));
let player = Number(input[0]);
let winner = 0;

for (let i = 0; i < 4; i++) {
  const [x, y] = logs[i];

  board[x][y] = player;
  player = player === 1 ? 2 : 1;
}

for (let i = 4; i < logs.length; i++) {
  const [x, y] = logs[i];

  board[x][y] = player;

  if (
    (board[1][1] === board[2][1] &&
      board[2][1] === board[3][1] &&
      board[3][1] !== 0) ||
    (board[1][2] === board[2][2] &&
      board[2][2] === board[3][2] &&
      board[3][2] !== 0) ||
    (board[1][3] === board[2][3] &&
      board[2][3] === board[3][3] &&
      board[3][3] !== 0) ||
    (board[1][1] === board[1][2] &&
      board[1][2] === board[1][3] &&
      board[1][3] !== 0) ||
    (board[2][1] === board[2][2] &&
      board[2][2] === board[2][3] &&
      board[2][3] !== 0) ||
    (board[3][1] === board[3][2] &&
      board[3][2] === board[3][3] &&
      board[3][3] !== 0) ||
    (board[1][1] === board[2][2] &&
      board[2][2] === board[3][3] &&
      board[3][3] !== 0) ||
    (board[1][3] === board[2][2] &&
      board[2][2] === board[3][1] &&
      board[3][1] !== 0)
  ) {
    winner = player;
    break;
  }

  player = player === 1 ? 2 : 1;
}

console.log(winner);