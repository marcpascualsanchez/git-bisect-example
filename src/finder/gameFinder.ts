import ageOfEmpires from "../games/ageOfEmpires";
import animalCrossing from "../games/animalCrossing";
import battlefieldV from "../games/battlefieldV";
import forza from "../games/forza";
import { IGame } from "../games/IGame";
import leagueOfLegends from "../games/leagueOfLegends";
import lostArk from "../games/lostArk";
import marioKart from "../games/marioKart";
import overwatch from "../games/overwatch";
import rocketLeague from "../games/rocketLeague";
import zelda from "../games/zelda";

const allGames: IGame[] = [
  leagueOfLegends,
  animalCrossing,
  battlefieldV,
  lostArk,
  zelda,
  forza,
  ageOfEmpires,
  overwatch,
  rocketLeague,
  marioKart,
];

function getRandom(list: any[]): any {
  return list[Math.floor(Math.random() * list.length)];
}

export function findRandomGame(availableTime: number): IGame {
  let availableGames = allGames;
  if (availableTime) {
    availableGames = allGames.filter(
      (g) => availableTime <= g.maxDuration && availableTime >= g.minDuration
    );
  }
  throw Error("I AM A NASTY BUG");
  return getRandom(availableGames);
}
