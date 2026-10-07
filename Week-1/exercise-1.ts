// Exercise 1: Game Library
export type IGame = {
  title: string;
  hoursPlayed: number;
  owned: boolean;
  finished: boolean;
  toStream: boolean
}
export type IGames = IGame[];

const games: IGames = [
  { title: "Hades", hoursPlayed: 40, owned: true, finished: true, toStream: false },
  { title: "Celeste", hoursPlayed: 5, owned: true, finished: false, toStream: true },
  { title: "Elden Ring", hoursPlayed: 0, owned: false, finished: false, toStream: true },
  { title: "Baldur's Gate", hoursPlayed: 90, owned: true, finished: false, toStream: false }
]

// Function to display the title of unfinished games

function unfinishedGamesTitles(gameList: IGames): string[] {
  const unfinishedGames = gameList.filter((game: IGame) => !game.finished);
  return unfinishedGames.map((game: IGame) => game.title);
}
console.log("Unfinished games :", unfinishedGamesTitles(games));

// Function to find the total of hours played with reduce()

function totalGamingHours(gameList: IGames): number {
  return gameList.reduce((accumulator, game) => accumulator + game.hoursPlayed, 0)
};
console.log("total gaming hours :", totalGamingHours(games));

// Function to find games owned to stream

function gamesToStream(gameList: IGames): IGames {
  const ownedGamesToStream = gameList.filter(game => game.owned && game.toStream);
  return ownedGamesToStream;
};
console.log("Games to stream :", gamesToStream(games));

// Function to classify game by hours played decreasing without modifying the original sheet

function sortByHoursPlayed(gameList: IGames): IGames {
  const copyGames = [...gameList]
  const sortedGames = copyGames.sort((a, b) => b.hoursPlayed - a.hoursPlayed)
  return sortedGames
};
console.log("Sorted games by hours played :", sortByHoursPlayed(games));

// Function to find the average playing time of owned games
function averageHours(gameList: IGames): number {
  const ownedGames = gameList.filter((game: IGame) => game.owned);
  if (ownedGames.length > 0) {
    const average = ownedGames.reduce(
      (accumulator, game) => accumulator + game.hoursPlayed, 0
    );
    return average / ownedGames.length
  } else {
    return 0;
  }
}

console.log("Average gaming hours :", averageHours(games));

// Function to sort games by status

function sortedGamesByStatus(gameList: IGames) {
  return gameList.reduce(
    (gamesByStatus, currentGame) => {
      if (currentGame.finished) {
        gamesByStatus.finished.push(currentGame.title)
      } else if (currentGame.hoursPlayed === 0) {
        gamesByStatus.notStarted.push(currentGame.title)
      } else {
        gamesByStatus.inProgress.push(currentGame.title)
      }
      return gamesByStatus;
    },
    {
      finished: [] as string[],
      notStarted: [] as string[],
      inProgress: [] as string[]
    }
  );
};
console.log(sortedGamesByStatus(games));