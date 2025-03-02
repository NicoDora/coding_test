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
      this.heap[index][1] < this.heap[parentIndex][1]
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
        this.heap[rightIndex][1] < this.heap[leftIndex][1]
      ) {
        minIndex = rightIndex;
      }

      if (this.heap[index][1] <= this.heap[minIndex][1]) break;

      this.swap(index, minIndex);
      index = minIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
    return min;
  }
}

function dijkstra(start, N, graph, grid) {
  const distance = Array(N * N).fill(Infinity);
  const minHeap = new MinHeap();

  distance[start] = grid[0][0];
  minHeap.insert([start, distance[start]]);

  while (minHeap.heap.length) {
    const [currentNode, currentWeight] = minHeap.shiftMin();

    if (currentWeight > distance[currentNode]) continue;

    for (const [nextNode, nextWeight] of graph[currentNode]) {
      const newWeight = currentWeight + nextWeight;

      if (newWeight < distance[nextNode]) {
        distance[nextNode] = newWeight;
        minHeap.insert([nextNode, newWeight]);
      }
    }
  }

  return distance[(N - 1) * N + (N - 1)];
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const result = [];
let N = Number(input[0]);
let index = 1;
let count = 1;

while (N) {
  const grid = [];
  const graph = Array.from({ length: N * N }, () => []);

  for (let i = 0; i < N; i++) {
    grid.push(input[index++].split(" ").map(Number));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const currentNode = i * N + j;

      for (const [di, dj] of directions) {
        const ni = i + di;
        const nj = j + dj;

        if (ni >= 0 && ni < N && nj >= 0 && nj < N) {
          const nextNode = ni * N + nj;
          graph[currentNode].push([nextNode, grid[ni][nj]]);
        }
      }
    }
  }

  result.push(`Problem ${count++}: ${dijkstra(0, N, graph, grid)}`);

  N = Number(input[index++]);
}

console.log(result.join("\n"));