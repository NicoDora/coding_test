const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

class Deque {
  constructor() {
    this.deque = [];
    this.front = 0;
    this.rear = 0;
  }

  pushFront(data) {
    this.front--;
    this.deque[this.front] = data;
  }

  pushBack(data) {
    this.deque[this.rear] = data;
    this.rear++;
  }

  popFront() {
    if (this.isEmpty()) return -1;
    const popData = this.deque[this.front];
    delete this.deque[this.front];
    this.front++;
    return popData;
  }

  getSize() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.getSize() === 0 ? 1 : 0;
  }
}

const deque = new Deque();
const visited = [];
const MAX = 100000;

deque.pushFront([N, 0]);
visited[N] = true;

while (!deque.isEmpty()) {
  const [current, time] = deque.popFront();

  if (current === K) {
    console.log(time);
    break;
  }

  // 순간이동 (시간: 0)
  if (current * 2 <= MAX && !visited[current * 2]) {
    deque.pushFront([current * 2, time]);
    visited[current * 2] = true;
  }

  // 걷기 (시간: 1)
  for (const next of [current - 1, current + 1]) {
    if (next >= 0 && next <= MAX && !visited[next]) {
      deque.pushBack([next, time + 1]);
      visited[next] = true;
    }
  }
}