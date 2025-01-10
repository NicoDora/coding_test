const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split("").map(Number));
// visited[x좌표][y좌표][(벽을 부쉈으면 1, 안부쉈으면 0)] -> 해당 좌표까지 간 거리를 저장
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [0, 0])
);
// queue -> [x, y, (벽을 부쉈으면 1, 안부쉈으면 0)]
const queue = [[0, 0, 0]];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = -1;

visited[0][0][0] = 1;

for (let i = 0; i < queue.length; i++) {
  const [x, y, z] = queue[i];

  if (x === N - 1 && y === M - 1) {
    result = visited[x][y][z];
    break;
  }

  for (let j = 0; j < 4; j++) {
    const nx = x + dx[j];
    const ny = y + dy[j];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      // 다음 칸이 빈 칸이고 아직 방문하지 않았다면
      if (map[nx][ny] === 0 && visited[nx][ny][z] === 0) {
        visited[nx][ny][z] = visited[x][y][z] + 1;
        queue.push([nx, ny, z]);
        // 다음 칸이 벽이고 아직까지 벽을 부시지 않고 이동했다면
      } else if (map[nx][ny] === 1 && z === 0) {
        visited[nx][ny][z + 1] = visited[x][y][z] + 1;
        queue.push([nx, ny, z + 1]);
      }
    }
  }
}

console.log(result);