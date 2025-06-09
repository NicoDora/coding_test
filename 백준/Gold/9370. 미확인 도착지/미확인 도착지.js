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

function dijkstra(start, n, graph) {
  const distance = Array(n + 1).fill(1e9);
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

const T = Number(input[0]);
const result = [];
let i = 1;

for (let _ = 0; _ < T; _++) {
  const [n, m, t] = input[i++].split(" ").map(Number);
  const [s, g, h] = input[i++].split(" ").map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);
  const goals = [];
  let distG2H = 0;

  for (let j = 0; j < m; j++) {
    const [a, b, d] = input[i++].split(" ").map(Number);

    if ((a === g && b === h) || (a === h && b === g)) distG2H = d;

    graph[a].push([b, d]);
    graph[b].push([a, d]);
  }

  for (let j = 0; j < t; j++) {
    goals.push(Number(input[i++]));
  }

  const distFromS = dijkstra(s, n, graph);
  const distFromG = dijkstra(g, n, graph);
  const distFromH = dijkstra(h, n, graph);

  const possible = [];
  // s -> g, h -> goal
  // s -> h, g -> goal
  for (const goal of goals) {
    const minRoute = Math.min(
      distFromS[g] + distG2H + distFromH[goal],
      distFromS[h] + distG2H + distFromG[goal]
    );

    if (minRoute === distFromS[goal]) possible.push(goal);
  }

  result.push(possible.sort((a, b) => a - b));
}

console.log(result.map((row) => row.join(" ")).join("\n"));