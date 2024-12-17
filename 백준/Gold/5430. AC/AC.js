const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Deque {
  constructor() {
    this.deque = [];
    this.front = 0;
    this.rear = 0;
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

  popBack() {
    if (this.isEmpty()) return -1;
    this.rear--;
    const popData = this.deque[this.rear];
    delete this.deque[this.rear];
    return popData;
  }

  getSize() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.getSize() === 0 ? 1 : 0;
  }

  getResult(isReverse) {
    const result = this.deque.slice(this.front, this.rear);
    return isReverse ? result.reverse() : result;
  }
}

function ac(array, queries) {
  const deque = new Deque();
  let isReverse = false;

  array.map((num) => deque.pushBack(num));

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];

    if (query === "R") isReverse = !isReverse;
    else if (query === "D") {
      if (deque.isEmpty()) return "error";
      isReverse ? deque.popBack() : deque.popFront();
    }
  }

  const result = deque.getResult(isReverse);

  return "[" + result.join(",") + "]";
}

const T = Number(input[0]);
const result = [];
let index = 1;

for (let i = 1; i <= T; i++) {
  const queries = input[index++];
  const n = Number(input[index++]);

  const slice = input[index++].slice(1, -1);
  const array = slice === "" ? [] : slice.split(",").map(Number);

  result.push(ac(array, queries));
}

console.log(result.join("\n"));