const fs = require("fs");
const [N, ...cards] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

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
      this.heap[index] < this.heap[parentIndex]
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

if (N === 1) console.log(0);
else {
  const minHeap = new MinHeap();
  let result = 0;

  for (let i = 0; i < N; i++) {
    minHeap.insert(cards[i]);
  }

  while (minHeap.heap.length > 1) {
    const sum = minHeap.shiftMin() + minHeap.shiftMin();

    result += sum;
    minHeap.insert(sum);
  }

  console.log(result);
}