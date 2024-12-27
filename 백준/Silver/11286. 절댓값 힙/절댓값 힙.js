const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

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
      (Math.abs(this.heap[index]) < Math.abs(this.heap[parentIndex]) ||
        (Math.abs(this.heap[index]) === Math.abs(this.heap[parentIndex]) &&
          this.heap[index] < this.heap[parentIndex]))
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

    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let minIndex = index;

      if (
        leftIndex < this.heap.length &&
        (Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[minIndex]) ||
          (Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[minIndex]) &&
            this.heap[leftIndex] < this.heap[minIndex]))
      ) {
        minIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        (Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[minIndex]) ||
          (Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[minIndex]) &&
            this.heap[rightIndex] < this.heap[minIndex]))
      ) {
        minIndex = rightIndex;
      }

      if (minIndex === index) break;

      this.swap(index, minIndex);
      index = minIndex;
    }

    return min;
  }
}

const N = Number(input[0]);
const array = input.slice(1);
const minHeap = new MinHeap();
const result = [];

for (let i = 0; i < N; i++) {
  if (array[i]) minHeap.insert(array[i]);
  else result.push(minHeap.shiftMin());
}

console.log(result.join("\n"));