const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

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

  pop() {
    if (this.size === 0) return null;

    const data = this.front.data;

    this.front = this.front.next;
    this.size--;

    return data;
  }
}
function bfs() {
  while (queue.size) {
    const [current, time] = queue.pop();
    const teleport = current * 2;

    if (current === K) return [current, time];

    // 순간이동
    if (teleport <= MAX && !visited[teleport]) {
      queue.push([teleport, time + 1]);
      visited[teleport] = true;
      prev[teleport] = current;
    }

    // 걷기
    for (const walk of [current - 1, current + 1]) {
      if (walk >= 0 && walk <= MAX && !visited[walk]) {
        queue.push([walk, time + 1]);
        visited[walk] = true;
        prev[walk] = current;
      }
    }
  }
}

const MAX = 100000;
// queue: [수빈이 위치, 소요 시간]
const queue = new Queue();
const visited = Array(MAX + 1).fill(false);
const prev = Array(MAX + 1).fill(-1);
const move = [];

queue.push([N, 0]);
visited[N] = true;

let [current, time] = bfs();

while (current !== -1) {
  move.push(current);
  current = prev[current];
}

console.log(time + "\n" + move.reverse().join(" "));