
//Define HTML Elements
// let playersCard = document.querySelector('.playersCards');
// console.log(playersCard);
// let playerOne = document.querySelector('.player1');
// console.log(playerOne);
// let computersCard = document.querySelector('.computersCards');
// console.log(computersCard);
// let computer = document.querySelector('.computer');
// console.log(computer);
// let playerScore = document.querySelector('.playerScore');
// console.log(playerScore);
// let computerScore = document.querySelector('.computerScore');
// console.log(computerScore);

//Create Deck of Cards
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = [];

for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < values.length; j++) {
        let card = {Value: values[j], Suit: suits[i]};
        deck.push(card);
    }
}
console.log(deck);

//Function to Shuffle Deck and deal half to each player
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    // } function deal() {
    //     
    //     }
    }

}

console.log();

//Deal Cards out to players - half of the deck to each
// function dealCards() {
//     return deck.pop();
// }


// let card = dealCards(deck);
// console.log(card);


//Function to Draw card from each deck


//Create Players
let playerOne;
let playerTwo;


// //Define Winning Conditions


//Define Tie Conditions

//Create Even Listeners

//Create Funtion which updates Scoreboard

//Extended Features: Create input for user to enter their own name, which would automatically update Player 1

