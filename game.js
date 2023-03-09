
//Define HTML Elements
let playersCard = document.querySelector('.playersCards');
// console.log(playersCard);
// let playerOne = document.querySelector('.player1');
// console.log(playerOne);
let computersCard = document.querySelector('.computersCards');
// console.log(computersCard);
// let computer = document.querySelector('.computer');
// console.log(computer);
let playerScore = document.querySelector('.playerScore');
// console.log(playerScore);
let computerScore = document.querySelector('.computerScore');
// console.log(computerScore);

//Make each player an Object - since I'm not adding players to the game, I don't need a class
let playerOne = {
    name: "Player One",
}

let playerTwo = {
    name: "Computer",
}
console.log(playerOne);
console.log(playerTwo);



//Create classes to store my cards (tip from Office Hours)
const suits = ["♠", "♦", "♣", "♥"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

class deckOfCards {
    constructor(cards = newDeck()) {
        this.cards = cards
    }
}

class card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
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


//Creating a new deck using the .flatMap & .map to iterate through array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
function newDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new card(suit, value)
        })
    })
}
const deck = new deckOfCards()
// console.log(deck.cards)


//making shuffle function work with cards as a class
function shuffleDeck() {
    for (let i = deck.cards.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * i);
        let temp = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = temp;
    }
}

// shuffleDeck();
// console.log(deck);



//problem I was running into - player 1 & 2 were inside the function, so they weren't global
let playerOneCards
let playerTwoCards

//Game Function
function playGame () {
    let deck = new deckOfCards;
    shuffleDeck()
    let half = Math.ceil(deck.cards.length / 2);
    let playerOneCards = deck.cards.splice(0, half);
    let playerTwoCards = deck.cards.splice(-half);

    // console.log(`Player One Cards are: ${playerOneCards}`);
    // console.log(`Computers Cards are: ${playerTwoCards}`);

    function cardsRemaining () {
        playerScore.innerText = playerOneCards
        computerScore.innerText = playerTwoCards
    }
}
playGame()

computersCard.appendChild(deck.cards[0].htmlForCard())
playersCard.appendChild(deck.cards[0].htmlForCard())

