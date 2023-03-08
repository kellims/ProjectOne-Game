
//Define HTML Elements
let playersCard = document.querySelector('.playersCards');
// let playerOne = document.querySelector('.player1');
let computersCard = document.querySelector('.computersCards');
// let computer = document.querySelector('.computer');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');

let newGame = document.querySelector('.newDeck');
let drawCard = document.querySelector('.draw');




//Make each player an Object - since I'm not adding players to the game, I don't need a class
let playerOne = {
    name: "Player One",
}
let playerTwo = {
    name: "Computer",
}
console.log(playerOne);
console.log(playerTwo);



// //Create classes to store my cards (tip from Office Hours)
const suits = ["♠", "♦", "♣", "♥"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];


class deckOfCards {
    constructor() {
        this.cards = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) { 
                // this.cards.push(new card(suits[i], values.indexOf(values[j]), values[j]));
                this.cards.push(new card(suits[i], values[j]));    
            }
        } 
    }
    shuffleDeck() {
        for (let i = deck.cards.length - 1; i > 0; i --) {
            let j = Math.floor(Math.random() * i);
            let temp = deck.cards[i];
            deck.cards[i] = deck.cards[j];
            deck.cards[j] = temp;
        }
    }
}

class card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
    // // add HTML Images for each card.
    htmlForCard(){
        let newCard = document.createElement('div');
        newCard.innerText = this.suit
        newCard.classList.add("cards");
        newCard.dataset.value = `${this.value} ${this.suit}`
        return newCard
    }
}

const deck = new deckOfCards()
console.log(deck.cards)


//These variable hold each players deck
let playerOneCards
let playerTwoCards


//Game Function
// newGame.addEventListener("click", playGameOfWar()) {
playGameOfWar()
function playGameOfWar () {
    let deck = new deckOfCards;
    deck.shuffleDeck()
    // Have to figure out why it's not calling my Shuffle function and instead splitting cards in half, in order
    let half = Math.ceil(deck.cards.length / 2);
    let playerOneCards = deck.cards.slice(0, half);
    let playerTwoCards = deck.cards.slice(half);
    console.log(playerOneCards)
    console.log(playerTwoCards)

    cardsRemaining()
    //function to track the remaining cards in each players deck
    function cardsRemaining () {
        playerScore.innerText = playerOneCards.length
        computerScore.innerText = playerTwoCards.length  
    }
    
    drawCard.addEventListener("click", drawCards) 
    //function for 'Draw' button to reveal new cards for each player
    function drawCards() {
        if(playerOneCards.length !== 0 && playerTwoCards !== 0){
                let playersCard = playerOneCards.shift();
                let computersCard = playerTwoCards.shift();
                if(playersCard.values.indexOf(values[j]) > computersCard.values.indexOf(values[j])) {
                    //Assign both cards to player's deck
                    playerOneCards.push(card)
                } else if(computersCard.values.indexOf(values[j]) > playersCard.values.indexOf(values[j])) {
                    //Assign both cards to computer's deck
                    playerTwoCards.push(card)
                }
                // console.log(playersCard)
                // return playersCard computersCard


//             // for (let i = 0; i < playerOneCards.length; i++)
            
//         }
//     }

       


//     // }
    
}
 
}
}



computersCard.appendChild(deck.cards[0].htmlForCard())
playersCard.appendChild(deck.cards[0].htmlForCard())