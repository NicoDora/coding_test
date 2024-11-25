const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[index++].split(" ").map(Number);
  const array = new Array(M);

  // 배열 초기화
  for (let r = 0; r < M; r++) {
    array[r] = new Array(N).fill(0);
  }

  // 인접행렬
  for (let j = 0; j < K; j++) {
    const [X, Y] = input[index++].split(" ").map(Number);
    array[X][Y] = 1;
  }

  // BFS
  // 방문처리는 원래 배열값을 0으로 설정
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let count = 0;

  // [0, 0]부터 [M, N]까지 배추가 있는지 각각 확인
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      // 배추가 있으면 상하좌우로 이동하여 값이 1인 인덱스를 큐에 추가
      if (array[x][y]) {
        const queue = [[x, y]];
        array[x][y] = 0;

        // 인접 배추가 없을 때 까지
        while (queue.length > 0) {
          const [qx, qy] = queue.shift();

          for (let index = 0; index < 4; index++) {
            const nx = qx + dx[index];
            const ny = qy + dy[index];

            if (nx >= 0 && nx < M && ny >= 0 && ny < N && array[nx][ny]) {
              queue.push([nx, ny]);
              array[nx][ny] = 0;
            }
          }
        }
        count++;
      }
    }
  }
  result.push(count);
}

console.log(result.join("\n"));