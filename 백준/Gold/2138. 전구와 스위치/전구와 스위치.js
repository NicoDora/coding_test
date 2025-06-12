const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function toggle(index) {
  if (index >= 0 && index < N) now[index] = 1 - now[index];
}

function clickSwitch(index) {
  toggle(index - 1);
  toggle(index);
  toggle(index + 1);
}

function start(count) {
  let match = true;

  for (let i = 1; i < N; i++) {
    if (now[i - 1] !== goal[i - 1]) {
      clickSwitch(i);
      count++;
    }
  }

  for (let i = 0; i < N; i++) {
    if (now[i] !== goal[i]) {
      match = false;
      break;
    }
  }

  if (match) result.push(count);
}

const N = Number(input[0]);
let now = input[1].split("").map(Number);
const goal = input[2].split("").map(Number);
const result = [];

// 0번 스위치를 누르지 않고 시작
start(0);

now = input[1].split("").map(Number);

// 0번 스위치를 누르고 시작
clickSwitch(0);
start(1);

console.log(result.length ? Math.min(...result) : -1);