// Exercise 1: Game Library
const games = [
  { title: "Hades", hoursPlayed: 40, owned: true, finished: true, toStream: false },
  { title: "Celeste", hoursPlayed: 5, owned: true, finished: false, toStream: true },
  { title: "Elden Ring", hoursPlayed: 0, owned: false, finished: false, toStream: true },
]

// Function to display the title of unfinished games

function unfinishedGamesTitles(){
    const unfinishedGames = games.filter(game => !game.finished);
    return unfinishedGames.map(game => game.title);
}
console.log(unfinishedGamesTitles());


// Function to find the total of hours played with reduce()

// Function to find games owned to stream

// Function to classify game by hours played decreasing without modifying the original sheet