
let playersCard = document.querySelector('.playersCards');
let computersCard = document.querySelector('.computersCards');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let gameAlerts = document.querySelector('.alerts');
let newGame = document.querySelector('.newDeck');
let drawCard = document.querySelector('.draw');
let playerOne = {
    name: "Player One",
}
let playerTwo = {
    name: "Computer",
}


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
    htmlForCard(){
        let newCard = document.createElement('div');
        newCard.innerText = this.suit;
        newCard.classList.add("cards");
        newCard.dataset.value = `${this.value} ${this.suit}`
        return newCard;
    }
}


function shuffleDeck(deck) {
    for (let i = deck.cards.length - 1; i > 0; i --) {
        let j = Math.floor(Math.random() * i);
        let temp = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = temp;   
    } return deck;
}


newGame.addEventListener("click", playGameOfWar);


function playGameOfWar () {
    let deck = new deckOfCards();
    shuffleDeck(deck);
    let half = Math.ceil(deck.cards.length / 2);
    let playerOneCards = deck.cards.slice(0, half);
    let playerTwoCards = deck.cards.slice(half);


    cardsRemaining();
    

    if(playerOneCards[0].number > playerTwoCards[0].number) {
        gameAlerts.innerText = "★ Player 1 wins ☆";
    } else if(playerTwoCards[0].number > playerOneCards[0].number) {
        gameAlerts.innerText = "☆ Computer wins ☆";
    }


    function cardsRemaining () {
        playerScore.innerText = playerOneCards.length;
        computerScore.innerText = playerTwoCards.length;  
    }
    

    drawCard.addEventListener("click", drawCards); 
    

    function drawCards() {
        winningConditions()
        if(playerOneCards.length !== 0 && playerTwoCards !== 0){
            computersCard.removeChild(computersCard.firstChild);
            playersCard.removeChild(playersCard.firstChild);
            computersCard.appendChild(playerTwoCards[0].htmlForCard());
            playersCard.appendChild(playerOneCards[0].htmlForCard()); 
        } else if(playerOneCards.length === 0) {
            endOfGame();
        } else if(playerTwoCards.length === 0) {
            endOfGame();
        }
     }


    function winningConditions() {
        let removedPlayerOneCard = playerOneCards.shift();
        let removedPlayerTwoCard = playerTwoCards.shift();
        if(playerOneCards[0].number > playerTwoCards[0].number) {
                playerOneCards.push(removedPlayerOneCard, removedPlayerTwoCard);
                gameAlerts.innerText = "★ Player 1 wins ★";
            } else if(playerTwoCards[0].number > playerOneCards[0].number) {
                playerTwoCards.push(removedPlayerTwoCard, removedPlayerOneCard);
                gameAlerts.innerText = "☆ Computer wins ☆";
            } else if(playerTwoCards[0].number === playerOneCards[0].number) {
                gameAlerts.innerText = "★ It's a tie ☆";
                playerTwoCards.push(removedPlayerTwoCard);
                playerOneCards.push(removedPlayerOneCard);
            } cardsRemaining();
    }


    function endOfGame(){
        if(playerOneCards.length > playerTwoCards.length) {
            gameAlerts.innerText = "★ Player 1 Wins the War ★";
            computersCard.removeChild(computersCard.firstChild);
            playersCard.removeChild(playersCard.firstChild);
            computersCard.appendChild(playerTwoCards[0].htmlForCard());
            playersCard.appendChild(playerOneCards[0].htmlForCard());
        }else if(playerTwoCards.length > playerOneCards.length) {
            gameAlerts.innerText = "☆ The Computer Wins the War ☆";
            computersCard.removeChild(computersCard.firstChild);
            playersCard.removeChild(playersCard.firstChild);
            computersCard.appendChild(playerTwoCards[0].htmlForCard());
            playersCard.appendChild(playerOneCards[0].htmlForCard());
        }
    }

           computersCard.appendChild(playerTwoCards[0].htmlForCard());
           playersCard.appendChild(playerOneCards[0].htmlForCard());          
}
