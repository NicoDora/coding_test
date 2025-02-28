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

  getMin() {
    return this.heap[0];
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

  getMax() {
    return this.heap[0];
  }
}

const N = Number(input[0]);
const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
const result = [];

for (let i = 1; i <= N; i++) {
  const num = Number(input[i]);

  if (maxHeap.heap.length === 0 || num <= maxHeap.getMax()) maxHeap.insert(num);
  else minHeap.insert(num);

  if (maxHeap.heap.length > minHeap.heap.length + 1) {
    minHeap.insert(maxHeap.shiftMax());
  }

  if (minHeap.heap.length > maxHeap.heap.length) {
    maxHeap.insert(minHeap.shiftMin());
  }

  while (
    minHeap.heap.length &&
    maxHeap.heap.length &&
    minHeap.getMin() < maxHeap.getMax()
  ) {
    minHeap.insert(maxHeap.shiftMax());
    maxHeap.insert(minHeap.shiftMin());
  }

  result.push(maxHeap.getMax());
}

console.log(result.join("\n"));