
//Define HTML Elements
// let cards = document.querySelectorAll('.card');
// let playerOne = document.querySelector('.player');

//Create Deck of Cards
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function deckOfCards() {
    let deck = new Array();
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}
console.log(deckOfCards);
// let deck

//Create Players
let computerPlayer = 

//Define Winning Conditions

function winner() {

}

//Define Tie Conditions

//Create Even Listeners

//Create Funtion which updates Scoreboard

//Extended Features: Create input for user to enter their own name, which would automatically update Player 1

