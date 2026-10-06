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
console.log(unfinishedGamesTitles(games));

// Function to find the total of hours played with reduce()

const initialValue = 0
const totalGamingHours = games.reduce(
  (accumulator, game) => accumulator + game.hoursPlayed,
  initialValue
);
console.log(totalGamingHours);

// Function to find games owned to stream

function gamesToStream() {
  const ownedGamesToStream = games.filter(game => game.owned && game.toStream);
  return ownedGamesToStream;
};
console.log(gamesToStream());

// Function to classify game by hours played decreasing without modifying the original sheet

const copyGames = [...games]
function sortByHoursPlayed() {
  copyGames.sort((a, b) => b.hoursPlayed - a.hoursPlayed)
};
sortByHoursPlayed();
console.log(copyGames);

// Function to find the average playing time of owned games
function averageHours(gameList: IGames) {
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

console.log(averageHours(games));