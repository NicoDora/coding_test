const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function propagate() {
  const temp = Array.from({ length: R }, () => Array(C).fill(0));

  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (home[x][y] > 0) {
        const amount = Math.floor(home[x][y] / 5);
        let spreadCount = 0;

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && nx < R && ny >= 0 && ny < C && home[nx][ny] !== -1) {
            temp[nx][ny] += amount;
            spreadCount++;
          }
        }

        temp[x][y] += home[x][y] - amount * spreadCount;
      }
    }
  }

  // 기존 home 배열에 temp 내용을 복사
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (home[x][y] !== -1) home[x][y] = temp[x][y];
    }
  }
}

function rotate() {
  // 공기청정기 위쪽
  const [ux, uy] = airPurifier[0];
  for (let i = ux - 1; i > 0; i--) home[i][uy] = home[i - 1][uy];
  for (let i = 0; i < C - 1; i++) home[0][i] = home[0][i + 1];
  for (let i = 0; i < ux; i++) home[i][C - 1] = home[i + 1][C - 1];
  for (let i = C - 1; i > 1; i--) home[ux][i] = home[ux][i - 1];
  home[ux][1] = 0;

  // 공기청정기 아래쪽
  const [dx, dy] = airPurifier[1];
  for (let i = dx + 1; i < R - 1; i++) home[i][dy] = home[i + 1][dy];
  for (let i = 0; i < C - 1; i++) home[R - 1][i] = home[R - 1][i + 1];
  for (let i = R - 1; i > dx; i--) home[i][C - 1] = home[i - 1][C - 1];
  for (let i = C - 1; i > 1; i--) home[dx][i] = home[dx][i - 1];
  home[dx][1] = 0;
}

const [R, C, T] = input[0].split(" ").map(Number);
const home = input.slice(1).map((row) => row.split(" ").map(Number));
const airPurifier = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (home[i][j] === -1) {
      airPurifier.push([i, j], [i + 1, j]);
      break;
    }
  }
  if (airPurifier.length) break;
}

for (let i = 0; i < T; i++) {
  propagate();
  rotate();
}

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (home[i][j] !== 0 && home[i][j] !== -1) result += home[i][j];
  }
}

console.log(result);