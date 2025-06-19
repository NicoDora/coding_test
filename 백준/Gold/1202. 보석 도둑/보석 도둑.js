const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
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
    if (this.heap.length === 0) return null;
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

const [N, K] = input[0].split(" ").map(Number);
const jewels = input.slice(1, N + 1).map((row) => row.split(" ").map(Number));
const bags = input.slice(N + 1).map(Number);
const maxHeap = new MaxHeap();
let totalValue = 0;
let i = 0;

bags.sort((a, b) => a - b);
jewels.sort((a, b) => a[0] - b[0]);

for (const weight of bags) {
  while (i < N && jewels[i][0] <= weight) {
    maxHeap.insert(jewels[i][1]);
    i++;
  }

  if (!maxHeap.isEmpty()) totalValue += maxHeap.shiftMax();
}

console.log(totalValue);