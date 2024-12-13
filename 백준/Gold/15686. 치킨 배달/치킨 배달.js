const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

// 치킨집의 조합 생성
function getCombinations(array, count) {
  if (count === 1) return array.map((e) => [e]);

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const fixed = array[i];
    const rest = array.slice(i + 1);
    const combinations = getCombinations(rest, count - 1);

    for (const combo of combinations) {
      result.push([fixed, ...combo]);
    }
  }

  return result;
}

const [N, M] = input[0].split(" ").map(Number);
const city = [];
const homes = [];
const restaurants = [];

// city 배열 초기값
for (let i = 1; i <= N; i++) {
  city.push(input[i].split(" ").map(Number));
}

// 각 집의 좌표와 각 치킨집의 좌표를 구함.
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (city[x][y] === 1) homes.push([x, y]);
    else if (city[x][y] === 2) restaurants.push([x, y]);
  }
}

const chickenCombinations = getCombinations(restaurants, M);
let minCityChickenDistance = Infinity;

// 각 조합의 치킨 거리 계산
for (let i = 0; i < chickenCombinations.length; i++) {
  const combination = chickenCombinations[i];
  let cityChickenDistance = 0;

  for (let j = 0; j < homes.length; j++) {
    const home = homes[j];
    let minDistance = Infinity;

    for (let k = 0; k < combination.length; k++) {
      const chicken = combination[k];
      const distance =
        Math.abs(home[0] - chicken[0]) + Math.abs(home[1] - chicken[1]);

      minDistance = Math.min(minDistance, distance);
    }
    cityChickenDistance += minDistance;
  }
  minCityChickenDistance = Math.min(
    minCityChickenDistance,
    cityChickenDistance
  );
}

console.log(minCityChickenDistance);