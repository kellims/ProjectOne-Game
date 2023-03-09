//Define HTML Elements
let playersCard = document.querySelector('.playersCards');
let computersCard = document.querySelector('.computersCards');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let gameAlerts = document.querySelector('.alerts');

let newGame = document.querySelector('.newDeck');
let drawCard = document.querySelector('.draw');
// let playerOne = document.querySelector('.player1');


//Make each player an Object - since I'm not adding players to the game, I don't need a class
let playerOne = {
    name: "Player One",
}
let playerTwo = {
    name: "Computer",
}



// Create classes to store my cards (tip from Office Hours)
const suits = ["♠", "♦", "♣", "♥"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];



class deckOfCards {
    constructor() {
        this.cards = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) { 
                this.cards.push(new card(suits[i], values[j], values.indexOf(values[j+1]))); 
            }
        } 
    }
}

class card {
    constructor(suit, value, number){
        this.suit = suit;
        this.value = value;
        this.number = number;
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

function shuffleDeck(deck) {
    for (let i = deck.cards.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * i);
        let temp = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = temp;
        
    } return deck
}



//Event Listener to begin Game Function
newGame.addEventListener("click", playGameOfWar);

function playGameOfWar () {
    let deck = new deckOfCards();
    shuffleDeck(deck)
    let half = Math.ceil(deck.cards.length / 2);
    let playerOneCards = deck.cards.slice(0, half);
    let playerTwoCards = deck.cards.slice(half);
    console.log(playerOneCards)
    console.log(playerTwoCards)

    cardsRemaining()
    
    if(playerOneCards[0].number > playerTwoCards[0].number) {
        gameAlerts.innerText = "Player 1 wins";
    } else if(playerTwoCards[0].number > playerOneCards[0].number) {
        gameAlerts.innerText = "Computer wins";
    }



    //function to track the remaining cards in each players deck
    function cardsRemaining () {
        playerScore.innerText = playerOneCards.length
        computerScore.innerText = playerTwoCards.length  
    
    }
    
    //Event Listener for 'Draw' button to reveal new cards for each player
    drawCard.addEventListener("click", drawCards); 
    
    function drawCards() {
        winningConditions()
        if(playerOneCards.length !== 0 && playerTwoCards !== 0){
            computersCard.removeChild(computersCard.firstChild);
            playersCard.removeChild(playersCard.firstChild);
            computersCard.appendChild(playerTwoCards[0].htmlForCard())
            playersCard.appendChild(playerOneCards[0].htmlForCard()) 
        } else if(playerOneCards.length === 0) {
            //end game function
        } else if(playerTwoCards.length === 0) {
            //end game function

        }
     }
    function winningConditions() {
        let removedPlayerOneCard = playerOneCards.shift();
        let removedPlayerTwoCard = playerTwoCards.shift();
        if(playerOneCards[0].number > playerTwoCards[0].number) {
                //Assign both cards to player's deck
                playerOneCards.push(removedPlayerOneCard, removedPlayerTwoCard);
                gameAlerts.innerText = "Player 1 wins";
            } else if(playerTwoCards[0].number > playerOneCards[0].number) {
                //Assign both cards to computer's deck
                playerTwoCards.push(removedPlayerTwoCard, removedPlayerOneCard);
                gameAlerts.innerText = "Computer wins";
            // } else if(playerTwoCards[0].number === playerOnesCards[0].number) {
            //     //Play War extended feature function

         } cardsRemaining();
    }
    // function endOfGame(){

    // }
        
           computersCard.appendChild(playerTwoCards[0].htmlForCard())
           playersCard.appendChild(playerOneCards[0].htmlForCard())             
}
