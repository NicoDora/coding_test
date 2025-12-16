const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [p, m] = input[0].split(" ").map(Number);
const rooms = [];
const result = [];

for (let i = 1; i <= p; i++) {
  const [levelStr, name] = input[i].split(" ");
  const level = Number(levelStr);
  let entered = false;

  for (const room of rooms) {
    if (room.players.length < m && Math.abs(level - room.baseLevel) <= 10) {
      room.players.push({ level, name });
      entered = true;
      break;
    }
  }

  if (!entered) {
    rooms.push({ baseLevel: level, players: [{ level, name }] });
  }
}

for (const room of rooms) {
  room.players.sort((a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
  });

  if (room.players.length === m) result.push("Started!");
  else result.push("Waiting!");

  for (const player of room.players) {
    result.push(`${player.level} ${player.name}`);
  }
}

console.log(result.join("\n"));