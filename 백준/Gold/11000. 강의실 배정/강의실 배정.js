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

  checkMin() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

const N = Number(input[0]);
const lesson = input.slice(1).map((row) => row.split(" ").map(Number));
const minHeap = new MinHeap();

lesson.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
minHeap.insert(lesson[0][1]);

for (let i = 1; i < N; i++) {
  const [currentS, currentT] = lesson[i];
  const earliestEndTime = minHeap.checkMin();

  if (earliestEndTime !== null && earliestEndTime <= currentS) {
    minHeap.shiftMin();
    minHeap.insert(currentT);
  } else minHeap.insert(currentT);
}

console.log(minHeap.size());