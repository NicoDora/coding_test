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

const [V, E] = input[0].split(" ").map(Number);
const graph = {};
const minHeap = new MinHeap();
const visited = Array(V + 1).fill(false);
let mstWeight = 0;
let line = 0;

for (let i = 1; i <= V; i++) {
  graph[i] = [];
}

// 그래프 {node1 : [node2, weight]}
for (let i = 1; i <= E; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

// 시작 노드: 1
visited[1] = true;

for (const [node, weight] of graph[1]) {
  minHeap.insert([node, weight]);
}

// MST
while (line < V - 1) {
  // 최소 가중치의 간선 꺼내기
  const [node, weight] = minHeap.shiftMin();

  // 방문여부 확인
  if (visited[node]) continue;

  visited[node] = true;
  mstWeight += weight;
  line++;

  // 최소 가중치를 가진 간선의 노드를 minHeap에 추가
  for (const [nextNode, edgeWeight] of graph[node]) {
    if (!visited[nextNode]) minHeap.insert([nextNode, edgeWeight]);
  }
}

console.log(mstWeight);