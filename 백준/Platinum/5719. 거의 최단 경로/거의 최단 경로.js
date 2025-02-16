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

function dijkstra(start, N, graph) {
  const distance = Array(N).fill(Infinity);
  const parents = Array.from({ length: N }, () => []);
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
        parents[nextNode] = [currentNode];
        minHeap.insert([nextNode, newWeight]);
      } else if (newWeight === distance[nextNode]) {
        parents[nextNode].push(currentNode);
      }
    }
  }

  return [distance, parents];
}

function removeShortestPath(node, visited, parents, graph) {
  if (visited[node]) return;

  visited[node] = true;

  for (const parent of parents[node]) {
    graph[parent] = graph[parent].filter(([next, weight]) => next !== node);
    removeShortestPath(parent, visited, parents, graph);
  }
}

const result = [];
let index = 0;

while (true) {
  const [N, M] = input[index++].split(" ").map(Number);
  if (N === 0 && M === 0) break;
  const [S, D] = input[index++].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => []);

  for (let i = 0; i < M; i++) {
    const [u, v, p] = input[index++].split(" ").map(Number);
    graph[u].push([v, p]);
  }

  removeShortestPath(D, Array(N).fill(false), dijkstra(S, N, graph)[1], graph);

  const nearShortestPath = dijkstra(S, N, graph)[0][D];

  result.push(nearShortestPath === Infinity ? -1 : nearShortestPath);
}

console.log(result.join("\n"));