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

function dijkstra(start, end) {
  const distance = Array(N + 1).fill(Infinity);
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

  return distance[end];
}

const [N, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const [v1, v2] = input[input.length - 1].split(" ").map(Number);

for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const route1 = dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, N);
const route2 = dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, N);

console.log(
  route1 === route2 && route1 === Infinity ? -1 : Math.min(route1, route2)
);