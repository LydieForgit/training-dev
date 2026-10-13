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

// Function to search games by name

function searchGame(gameList: IGames, text: string): IGames {
  return gameList.filter((game) => game.title.toLowerCase().includes(text.toLowerCase()))
}
console.log("searching 'el':", searchGame(games, "el"));
console.log("searching 'HADES':",searchGame(games, "HADES"));
console.log("searching 'zzz':",searchGame(games, "zzz"));

// Git exercise branche-a
// Week 2

// Function to add a new game and return a new tab without editing the original (indice : l’opérateur ... que tu as déjà utilisé).
function addGame(gameList: IGames, newGame: IGame): IGames {
  const copyGameList = [...gameList];
  copyGameList.push(newGame);
  return copyGameList
}; 

console.log("add game :", addGame(games, {
  title: "Outer Wilds",
  hoursPlayed: 20,
  owned: true,
  finished: false,
  toStream: true
}))

//toggleFinished(gameList, title) qui renvoie un nouveau tableau où le jeu portant ce titre a son finished inversé (indice : map, et { ...game, finished: !game.finished }).

function toggleFinished(gameList: IGames, title: string): IGames {
  return gameList.map((game) => {
    if (game.title.toLowerCase() === title.toLowerCase()) {
      return {...game, finished: !game.finished};
    }
    return game;
  });
}

const updated = toggleFinished(games, "celeste");
console.log(updated[1].finished); // true
console.log(games[1].finished);   // false (l'original n'a pas bougé)