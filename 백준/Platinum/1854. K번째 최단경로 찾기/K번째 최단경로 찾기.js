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

class MaxHeap {
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

    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  shiftMax() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;

    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let maxIndex = index;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightIndex;
      }

      if (maxIndex === index) break;

      this.swap(index, maxIndex);
      index = maxIndex;
    }

    return max;
  }
}

function kthDijkstra(start) {
  const distances = Array.from({ length: n + 1 }, () => new MaxHeap());
  const minHeap = new MinHeap();

  distances[start].insert(0);
  minHeap.insert([start, 0]);

  while (minHeap.heap.length) {
    const [currentNode, currentWeight] = minHeap.shiftMin();

    for (const [nextNode, nextWeight] of graph[currentNode]) {
      const newWeight = currentWeight + nextWeight;

      if (
        distances[nextNode].heap.length < k ||
        distances[nextNode].heap[0] > newWeight
      ) {
        distances[nextNode].insert(newWeight);

        if (distances[nextNode].heap.length > k) distances[nextNode].shiftMax();

        minHeap.insert([nextNode, newWeight]);
      }
    }
  }

  return distances;
}

const [n, m, k] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const result = Array(n).fill(-1);

for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
}

const distances = kthDijkstra(1);

for (let i = 1; i <= n; i++) {
  if (distances[i].heap.length === k) result[i - 1] = distances[i].heap[0];
}

console.log(result.join("\n"));