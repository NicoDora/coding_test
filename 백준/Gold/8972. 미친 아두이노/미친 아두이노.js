const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function getNextArduinoPosition(ax, ay) {
  const distance = [];
  const position = [];

  for (let i = 1; i < 10; i++) {
    const anx = ax + directions[i][0];
    const any = ay + directions[i][1];

    distance.push(Math.abs(x - anx) + Math.abs(y - any));
    position.push([anx, any]);
  }

  const minIndex = distance.indexOf(Math.min(...distance));

  return position[minIndex];
}

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1, R + 1).map((row) => row.split(""));
const move = input[R + 1].split("").map(Number);
const directions = [
  [],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];
let x = 0,
  y = 0;
let arduino = [];
let count = 0;
let die = false;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "I") {
      x = i;
      y = j;
    } else if (board[i][j] === "R") arduino.push([i, j]);
  }
}

for (let i = 0; i < move.length; i++) {
  // 종수 아두이노 이동
  const next = move[i];
  const nx = x + directions[next][0];
  const ny = y + directions[next][1];

  count++;

  if (board[nx][ny] === "R") {
    die = true;
    break;
  }

  board[x][y] = ".";
  board[nx][ny] = "I";

  x = nx;
  y = ny;

  // 미친 아두이노 이동
  const nextPositions = [];
  const positionCount = {};

  for (let j = 0; j < arduino.length; j++) {
    const [ax, ay] = arduino[j];
    const [anx, any] = getNextArduinoPosition(ax, ay);
    nextPositions.push([anx, any]);

    const key = `${anx},${any}`;
    positionCount[key] = (positionCount[key] || 0) + 1;
  }

  for (let j = 0; j < arduino.length; j++) {
    const [ax, ay] = arduino[j];
    board[ax][ay] = ".";
  }

  const newArduino = [];

  for (let j = 0; j < nextPositions.length; j++) {
    const [anx, any] = nextPositions[j];

    if (anx === x && any === y) {
      die = true;
      break;
    }

    const key = `${anx},${any}`;

    if (positionCount[key] === 1) {
      board[anx][any] = "R";
      newArduino.push([anx, any]);
    }
  }

  if (die) break;
  arduino = newArduino;
}

console.log(
  die ? `kraj ${count}` : board.map((row) => row.join("")).join("\n")
);