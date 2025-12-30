const fs = require("fs");
const [F, S, G, U, D] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

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

function bfs() {
  const queue = new Queue();
  const visited = Array(F + 1).fill(-1);

  queue.push(S);
  visited[S] = 0;

  while (queue.size) {
    const current = queue.shift();

    if (current === G) return visited[G];

    for (const d of [U, -D]) {
      const next = current + d;

      if (next < 1 || next > F || visited[next] > -1) continue;

      queue.push(next);
      visited[next] = visited[current] + 1;
    }
  }

  return "use the stairs";
}

console.log(bfs());