const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 노드 교환
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 삽입
  push(x) {
    this.heap.push(x);

    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      // 부모노드가 존재하고 부모노드보다 작으면
      this.heap[parentIndex] &&
      this.heap[index] < this.heap[parentIndex]
    ) {
      // 노드 스왑 후 인덱스 업데이트
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // 최소값 출력 후 제거
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    else if (this.heap.length === 0) return 0;
    else {
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();

      let index = 0;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      // 왼쪽 자식노드가 존재하면
      while (leftIndex < this.heap.length) {
        let minIndex = leftIndex;

        if (
          // 오른쪽 자식노드가 존재하고, 왼쪽 자식노드보다 작으면
          rightIndex < this.heap.length &&
          this.heap[rightIndex] < this.heap[leftIndex]
        ) {
          minIndex = rightIndex;
        }

        if (this.heap[index] <= this.heap[minIndex]) break; // 부모노드가 더 작으면 종료

        // 노드 스왑 후 인덱스 업데이트
        this.swap(index, minIndex);
        index = minIndex;
        leftIndex = index * 2 + 1;
        rightIndex = index * 2 + 2;
      }
      return min;
    }
  }

  size() {
    return this.heap.length;
  }
}

function dijkstra(start, end) {
  const distance = Array(N + 1).fill(Infinity);
  const heap = new MinHeap();

  distance[start] = 0;
  heap.push([start, 0]);

  while (heap.size()) {
    const [currentNode, currentCost] = heap.pop();

    if (distance[currentNode] < currentCost) continue;

    // 이웃노드 탐색
    for (const [nextNode, weight] of graph[currentNode]) {
      const newCost = currentCost + weight;

      // 새 가격이 기존의 가격보다 작으면
      if (newCost < distance[nextNode]) {
        distance[nextNode] = newCost;
        heap.push([nextNode, newCost]);
      }
    }
  }

  return distance[end];
}

const N = Number(input[0]);
const M = Number(input[1]);
const graph = Array.from({ length: N + 1 }, () => []);
const [startCity, endCity] = input[M + 2].split(" ").map(Number);

// graph 초기화
for (let i = 2; i < M + 2; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  graph[start].push([end, cost]);
}

console.log(dijkstra(startCity, endCity));