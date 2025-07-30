const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.size === 0) return null;

    const data = this.front.data;

    this.front = this.front.next;
    this.size--;

    return data;
  }
}

function getCombinations(array, maxLength) {
  const result = [];

  function dfs(start, combination) {
    if (combination.length === maxLength) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < array.length; i++) {
      combination.push(array[i]);
      dfs(i + 1, combination);
      combination.pop();
    }
  }

  dfs(0, []);

  return result;
}

function bfs(virusLocation) {
  const currentLab = lab.map((e) => [...e]);
  const queue = new Queue();
  let maxTime = 0;

  // 활성화된 바이러스를 큐에 넣고 bfs 실행
  for (const [i, j] of virusLocation) {
    currentLab[i][j] = 0;
    queue.push([i, j]);
  }

  while (queue.size) {
    const [x, y] = queue.pop();
    const dist = currentLab[x][y];

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      const nextDist = dist + 1;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= N ||
        // 벽 이거나
        isNaN(currentLab[nx][ny]) ||
        // 이전에 도달한 거리보다 큰 경우
        nextDist >= currentLab[nx][ny]
      ) {
        continue;
      }

      currentLab[nx][ny] = nextDist;
      queue.push([nx, ny]);
    }
  }

  // 연구실 배열에 저장된 거리 중 가장 큰 값을 리턴
  for (const [i, j] of emptyCells) {
    // 거리가 Infinity 인 칸이 있다면 바이러스가 모든 칸으로 퍼트려지지 않았음을 의미하므로 Infinity 리턴
    if (currentLab[i][j] === Infinity) return Infinity;
    maxTime = Math.max(maxTime, currentLab[i][j]);
  }

  return maxTime;
}

const [N, M] = input[0].split(" ").map(Number);
const lab = input.slice(1).map((row) => row.split(" ").map(Number));
const virus = [];
const emptyCells = [];
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 빈 칸은 바이러스가 퍼지는 시간 (초기값 Infinity), 벽은 "-" 로 표시
    if (lab[i][j] === 0) {
      lab[i][j] = Infinity;
      emptyCells.push([i, j]);
    } else if (lab[i][j] === 1) lab[i][j] = "-";
    else if (lab[i][j] === 2) {
      lab[i][j] = Infinity;
      virus.push([i, j]);
    }
  }
}

const combinations = getCombinations(virus, M);
let minTime = Infinity;

// 바이러스 M개를 선택하는 브루트포스 실행
for (const combination of combinations) {
  minTime = Math.min(minTime, bfs(combination));
}

console.log(minTime === Infinity ? -1 : minTime);