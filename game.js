
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

//Make each player an Object - since I'm not adding players to the game, I don't need a class
let playerOne = {
    name: "Player One",
    cards: []
}

let playerTwo = {
    name: "Computer",
    cards: []
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
        //add HTML Images for each card.
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
console.log(deck.cards)


//making shuffle function work with cards as a class
function shuffleDeck() {
    for (let i = deck.cards.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * i);
        let temp = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = temp;
    }
    
    // call dealCards function inside
     }

shuffleDeck();
console.log(deck.cards);



// for(let i = 0; i < suits.length; i++) {
//     for(let j = 0; j < values.length; j++) {
//         let card = {Value: values[j], Suit: suits[i]};
//         deck.push(card);
//     }

// }
// console.log(deck);


// //Function to Shuffle Deck (Can't get my for loop to work when inside a function)

// function shuffleDeck() {
//     for (let i = deck.length - 1; i > 0; i --) {
//         let j = Math.floor(Math.random() * i);
//         let temp = deck[i];
//         deck[i] = deck[j];
//         deck[j] = temp;
//     }
    
//     // call dealCards function inside
//      }

// shuffleDeck();
// console.log(deck);

// //Function to Deal half of the cards to each player
// function dealCards() {
//     let arr = [deck];
//     let half = Math.ceil(deck.length / 2);
//     let playerOneCards = arr.splice(0, half);
//     let playerTwoCards = arr.splice(-half);
//  }
// dealCards(deck);
// console.log(`Player One Cards are: ${playerOneCards}`);
// console.log(`Computers Cards are: ${playerTwoCards}`)



// //Deal Cards out to players - half of the deck to each
// // function dealCards() {
// //     return deck.pop();
// // }
// // let card = dealCards(deck);
// // console.log(card);


// //Function to Draw card from each deck




// // //Define Winning Conditions
// // function winner() {
// //     const winningConditions = [
// //         if 
// //     ]
// // }


// //Define Tie Conditions

// //Create Even Listeners

// //Create Funtion which updates Scoreboard

// //Extended Features: Create input for user to enter their own name, which would automatically update Player 1

