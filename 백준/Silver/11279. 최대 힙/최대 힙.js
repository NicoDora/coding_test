const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

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

    while (
      this.heap[parentIndex] &&
      this.heap[index] > this.heap[parentIndex]
    ) {
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
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;

    while (leftIndex < this.heap.length) {
      let maxIndex = leftIndex;

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] > this.heap[leftIndex]
      ) {
        maxIndex = rightIndex;
      }

      if (this.heap[index] >= this.heap[maxIndex]) break;

      this.swap(index, maxIndex);
      index = maxIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
    return max;
  }
}

const N = input[0];
const array = input.slice(1);
const maxHeap = new MaxHeap();
const result = [];

for (let i = 0; i < N; i++) {
  if (array[i]) maxHeap.insert(array[i]);
  else result.push(maxHeap.shiftMax());
}

console.log(result.join("\n"));