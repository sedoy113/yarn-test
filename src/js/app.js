// TODO: write code here
const status = { healthy: 51, wounded: 15, critical: 0 };
export default function streakOfLife(player) {
  return Object.keys(status).find((name) => status[name] <= player.health);
}
