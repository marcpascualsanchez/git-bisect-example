import animalCrossing from "../games/animalCrossing";
import battlefieldV from "../games/battlefieldV";
import { IGame } from "../games/IGame";
import leagueOfLegends from "../games/leagueOfLegends";
import lostArk from "../games/lostArk";

const allGames = [leagueOfLegends, animalCrossing, battlefieldV, lostArk]

function getRandom(list: any[]): any {
    return list[Math.floor(Math.random() * list.length)]
}

export function findRandomGame(availableTime: number): IGame {
    let availableGames = allGames
    if (availableTime) {
        availableGames = allGames.filter(g => availableTime <= g.maxDuration && availableTime >= g.minDuration)
    }
    return getRandom(availableGames)
}