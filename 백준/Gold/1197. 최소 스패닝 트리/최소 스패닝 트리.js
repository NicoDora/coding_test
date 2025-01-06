const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function findRoot(node) {
  if (parent[node] === node) return node;
  return (parent[node] = findRoot(parent[node])); // root노드 탐색 및 경로 압축
}

function union(node1, node2) {
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  // 깊이(rank)가 더 낮은 트리를 높은 트리에 붙임
  if (root1 !== root2) {
    if (rank[root1] > rank[root2]) parent[root2] = root1;
    else if (rank[root1] < rank[root2]) parent[root1] = root2;
    else {
      parent[root2] = root1;
      rank[root1]++;
    }
    return true;
  }
  return false;
}

const [V, E] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));
const parent = Array.from({ length: V + 1 }, (_, i) => i);
const rank = Array(V + 1).fill(0);
let mstWeight = 0;
let edgeCount = 0;

edges.sort((a, b) => a[2] - b[2]);

// 크루스칼(Kurskal) 알고리즘
for (let i = 0; i < E; i++) {
  const [a, b, weight] = edges[i];

  if (union(a, b)) {
    mstWeight += weight;
    edgeCount++;

    if (edgeCount === V - 1) break;
  }
}

console.log(mstWeight);

/* 프림(Prim) 알고리즘
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
let edgeCount = 0;

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
while (edgeCount < V - 1) {
  // 최소 가중치의 간선 꺼내기
  const [node, weight] = minHeap.shiftMin();

  // 방문여부 확인
  if (visited[node]) continue;

  visited[node] = true;
  mstWeight += weight;
  edgeCount++;

  // 최소 가중치를 가진 간선의 노드를 minHeap에 추가
  for (const [nextNode, edgeWeight] of graph[node]) {
    if (!visited[nextNode]) minHeap.insert([nextNode, edgeWeight]);
  }
}

console.log(mstWeight);
*/