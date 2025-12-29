const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  shift() {
    if (this.size === 0) return null;

    const data = this.front.data;

    this.front = this.front.next;
    this.size--;

    return data;
  }
}

function bfs(n, locations) {
  const queue = new Queue();
  const visited = Array(n + 2).fill(false);

  queue.push(0);
  visited[0] = true;

  while (queue.size) {
    const currentIndex = queue.shift();
    const [currentX, currentY] = locations[currentIndex];

    if (currentIndex === n + 1) return "happy";

    for (let nextIndex = 0; nextIndex < n + 2; nextIndex++) {
      if (visited[nextIndex]) continue;

      const [nextX, nextY] = locations[nextIndex];
      const distance = Math.abs(currentX - nextX) + Math.abs(currentY - nextY);

      if (distance <= 1000) {
        queue.push(nextIndex);
        visited[nextIndex] = true;
      }
    }
  }

  return "sad";
}

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const n = Number(input[index++]);
  const locations = [];

  for (let j = 0; j < n + 2; j++) {
    locations.push(input[index++].split(" ").map(Number));
  }

  result.push(bfs(n, locations));
}

console.log(result.join("\n"));