const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

// 빈칸에 숫자 채워넣기
function dfs(index) {
  if (index === blanks.length) return true;

  // 현재 빈칸의 좌표 [x, y]
  const [x, y] = blanks[index];
  const boxIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);

  // 1부터 9까지 들어갈 수 있는지 확인
  for (let num = 1; num <= 9; num++) {
    // 숫자가 유효하면 보드를 채우고 다음 빈칸으로 이동
    if (
      !rows[x].includes(num) &&
      !cols[y].includes(num) &&
      !boxes[boxIndex].includes(num)
    ) {
      board[x][y] = num;
      rows[x].push(num);
      cols[y].push(num);
      boxes[boxIndex].push(num);

      if (dfs(index + 1)) return true;

      board[x][y] = 0;
      rows[x].pop(num);
      cols[y].pop(num);
      boxes[boxIndex].pop(num);
    }
  }

  return false;
}

const board = input.map((line) => line.split("").map(Number));
const blanks = [];
const rows = Array.from({ length: 9 }, () => []);
const cols = Array.from({ length: 9 }, () => []);
const boxes = Array.from({ length: 9 }, () => []);

for (let x = 0; x < 9; x++) {
  for (let y = 0; y < 9; y++) {
    // 빈칸 확인
    if (board[x][y] === 0) blanks.push([x, y]);
    // 초기 상태 세팅
    else {
      rows[x].push(board[x][y]);
      cols[y].push(board[x][y]);
      boxes[Math.floor(x / 3) * 3 + Math.floor(y / 3)].push(board[x][y]);
    }
  }
}

dfs(0);

console.log(board.map((line) => line.join("")).join("\n"));