import { magenta } from "chalk";
import { findRandomGame } from "./finder/gameFinder";

function start() {
  const args = process.argv.slice(2);
  const availableTime = args[0];
  const game = findRandomGame(parseInt(availableTime));
  console.log(`You can try ${magenta(game.name)}!`);
}

start();