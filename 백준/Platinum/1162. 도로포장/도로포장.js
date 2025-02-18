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
      this.heap[index][2] < this.heap[parentIndex][2]
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
        this.heap[rightIndex][2] < this.heap[leftIndex][2]
      ) {
        minIndex = rightIndex;
      }

      if (this.heap[index][2] <= this.heap[minIndex][2]) break;

      this.swap(index, minIndex);
      index = minIndex;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
    }
    return min;
  }
}

function dijkstra(start) {
  const distance = Array.from({ length: N + 1 }, () =>
    Array(K + 1).fill(Infinity)
  );
  const minHeap = new MinHeap();

  // [노드, 포장 횟수]
  distance[start][0] = 0;
  // [현재 노드, 지금까지 포장한 횟수, 지금까지의 거리]
  minHeap.insert([start, 0, 0]);

  while (minHeap.heap.length) {
    const [currentNode, count, currentWeight] = minHeap.shiftMin();

    if (currentWeight > distance[currentNode][count]) continue;

    for (const [nextNode, nextWeight] of graph[currentNode]) {
      const newWeight = currentWeight + nextWeight;

      if (newWeight < distance[nextNode][count]) {
        distance[nextNode][count] = newWeight;
        minHeap.insert([nextNode, count, newWeight]);
      }

      if (count < K && currentWeight < distance[nextNode][count + 1]) {
        distance[nextNode][count + 1] = currentWeight;
        minHeap.insert([nextNode, count + 1, currentWeight]);
      }
    }
  }

  return distance;
}

const [N, M, K] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

console.log(Math.min(...dijkstra(1)[N]));