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

    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
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
        this.heap[rightIndex] < this.heap[leftIndex]
      ) {
        minIndex = rightIndex;
      }

      if (this.heap[index] <= this.heap[minIndex]) break;

      this.swap(index, minIndex);
      index = minIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }

    return min;
  }
}

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array(N + 1).fill(0);
const minHeap = new MinHeap();
const result = [];

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

for (const current in graph) {
  for (const next of graph[current]) {
    inDegree[next]++;
  }
}

for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) minHeap.insert(i);
}

while (minHeap.heap.length) {
  const current = minHeap.shiftMin();
  result.push(current);

  for (const next of graph[current]) {
    inDegree[next]--;
    if (inDegree[next] === 0) minHeap.insert(next);
  }
}

console.log(result.join(" "));