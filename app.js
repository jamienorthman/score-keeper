// Desired output: numbers show up in green (score)
// based on which increment button is clicked (+1, +2, or +3)
// Necessary steps to achieve desired output:
// - When the user clicks an increment button,
// increase score amount by that number and display
// updated score.
// - When a score reaches 30, that side (HOME or GUEST)
// is declared and is displayed as winner.
// - When the "Rematch" button is clicked, scores
// are reset to 0 and displayed as 0.
//const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" //deleting the end ".png" because that defines individual images
const homeTitle = document.getElementById("home-title")
const guestTitle = document.getElementById("guest-title")
const homeDisplay = document.getElementById("home-score")
const guestDisplay = document.getElementById("guest-score")
const homeRematch = document.getElementById("home-rematch")
const guestRematch = document.getElementById("guest-rematch")

let gameEnd = false;
const limit = 30;

let homeScore = 0
let guestScore = 0
homeDisplay.textContent = 0
guestDisplay.textContent = 0

//function generatePokemon() {
    //const stageEl = getElementById("stage-el")
    //const pokemonImg1 = document.createElement("img");
    //pokemonImg1.src = Math.floor(Math.random() * baseURL.png)
    //const pokemonImg2 = document.createElement("img");
    //pokemonImg2.src = Math.floor(Math.random() * baseURL.png)
    //console.log(pokemonImg1, pokemonImg2)
    //stageEl.appendChild(pokemonImg1, pokemonImg2)
//}

//generatePokemon()

// This function is a procedure, it does something but does not
// return a value
function updateScoreboard() {
    if (homeScore > 29) {
        homeTitle.textContent = "Winner!"
        homeScore = 30
        gameEnd = true;
    } else if (guestScore > 29) {
        guestTitle.textContent = "Winner!"
        guestScore = 30
        gameEnd = true;
    }
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
}

// This function is a procedure, it does something but does not
// return a value
function addScore(team, points) {
    if (gameEnd) {
        return; //if game is not running do not change the score
    }
    if (team === "home") {
        homeScore += points
    } else if (team === "guest") {
        guestScore += points
    }
    updateScoreboard()
}

function resetGame() {
    homeScore = 0
    guestScore = 0
    homeTitle.textContent = "TRAINER 1"
    guestTitle.textContent = "TRAINER 2"
    homeDisplay.textContent = 0
    guestDisplay.textContent = 0
    gameEnd = false;
}


