const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function isPossible() {
  for (const [x, y] of teachers) {
    for (let i = 0; i < 4; i++) {
      let nx = x;
      let ny = y;

      while (true) {
        nx += directions[i][0];
        ny += directions[i][1];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) break;
        if (corridor[nx][ny] === "O") break;
        if (corridor[nx][ny] === "S") return false;
      }
    }
  }

  return true;
}

const N = Number(input[0]);
const corridor = input.slice(1).map((row) => row.split(" "));
const teachers = [];
const blanks = [];
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (corridor[i][j] === "T") teachers.push([i, j]);
    else if (corridor[i][j] === "X") blanks.push([i, j]);
  }
}

for (let i = 0; i < blanks.length - 2; i++) {
  const [ix, iy] = blanks[i];
  corridor[ix][iy] = "O";

  for (let j = i + 1; j < blanks.length - 1; j++) {
    const [jx, jy] = blanks[j];
    corridor[jx][jy] = "O";

    for (let k = j + 1; k < blanks.length; k++) {
      const [kx, ky] = blanks[k];
      corridor[kx][ky] = "O";

      if (isPossible()) {
        console.log("YES");
        return;
      }

      corridor[kx][ky] = "X";
    }

    corridor[jx][jy] = "X";
  }

  corridor[ix][iy] = "X";
}

console.log("NO");