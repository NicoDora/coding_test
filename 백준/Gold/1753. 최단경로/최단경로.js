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

function dijkstra(start) {
  const distance = Array(V + 1).fill(Infinity);
  const minHeap = new MinHeap();

  distance[start] = 0;
  minHeap.insert([start, 0]);

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

  return distance;
}

const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < E + 2; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  graph[u].push([v, w]);
}

const result = dijkstra(K)
  .slice(1)
  .map((value) => (value === Infinity ? "INF" : value));

console.log(result.join("\n"));