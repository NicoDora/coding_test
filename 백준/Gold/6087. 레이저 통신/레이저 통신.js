const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      this.heap[parentIndex] &&
      this.heap[index][0] < this.heap[parentIndex][0]
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  shiftMin() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;

    while (leftIndex < this.heap.length) {
      let minIndex = leftIndex;

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex][0] < this.heap[leftIndex][0]
      ) {
        minIndex = rightIndex;
      }

      if (this.heap[index][0] <= this.heap[minIndex][0]) break;

      this.swap(index, minIndex);
      index = minIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
    return min;
  }
}

function dijkstra(sx, sy) {
  // [사용한 거울 개수, x, y, 방향]
  const minHeap = new MinHeap();
  // [x][y][방향]: 사용한 거울 개수
  const distance = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(4).fill(Infinity))
  );

  for (let i = 0; i < 4; i++) {
    distance[sx][sy][i] = 0;
    minHeap.insert([0, sx, sy, i]);
  }

  while (minHeap.heap.length) {
    const [currentCount, cx, cy, cd] = minHeap.shiftMin();

    if (currentCount > distance[cx][cy][cd]) continue;

    for (const [dx, dy, nextDirection, cost] of directions[cd]) {
      const nx = cx + dx;
      const ny = cy + dy;
      const newCount = currentCount + cost;

      if (nx >= 0 && nx < H && ny >= 0 && ny < W && map[nx][ny] !== "*") {
        if (newCount < distance[nx][ny][nextDirection]) {
          distance[nx][ny][nextDirection] = newCount;
          minHeap.insert([newCount, nx, ny, nextDirection]);
        }
      }
    }
  }

  return distance;
}

const [W, H] = input[0].split(" ").map(Number);
const map = input.slice(1).map((row) => row.split(""));
const c = [];
const directions = [
  [
    [-1, 0, 0, 0],
    [0, -1, 3, 1],
    [0, 1, 1, 1],
  ],
  [
    [0, 1, 1, 0],
    [-1, 0, 0, 1],
    [1, 0, 2, 1],
  ],
  [
    [1, 0, 2, 0],
    [0, 1, 1, 1],
    [0, -1, 3, 1],
  ],
  [
    [0, -1, 3, 0],
    [1, 0, 2, 1],
    [-1, 0, 0, 1],
  ],
];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "C") c.push([i, j]);
  }
}

const distance = dijkstra(c[0][0], c[0][1]);
let minMirrors = Infinity;

for (let i = 0; i < 4; i++) {
  minMirrors = Math.min(minMirrors, distance[c[1][0]][c[1][1]][i]);
}

console.log(minMirrors);