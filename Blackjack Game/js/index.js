var h1cl = document.getElementById('h1-cl'),
h2cl = document.getElementById('h2-cl'),
startBtn = document.getElementById('start-btn'),
cards = document.getElementById('cards'),
givecardBtn = document.getElementById('givecard-btn'),
result = document.getElementById('result'),
isBlackjack = true,
isAlive = false;
isalive = true;
var allCards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var profil = {
  name: "Marcel",
  Cash: 0,
  isLikeBlackjack: true
}
var sum = 0;
var randomElement = 0;
var message = "";
function randomCard() {
  randomElement = allCards[Math.floor(Math.random() * allCards.length)];

}
sum = result.textContent;
function startGame() {
  if (isalive === true) {
    h2cl.textContent = "Your Cards:";
    var sum1 = randomElement = allCards[Math.floor(Math.random() * allCards.length)];
    var sum2 = randomElement = allCards[Math.floor(Math.random() * allCards.length)];
    sum = sum1 + sum2;
    cards.textContent += sum1 + " " + sum2 + " ";
    result.textContent = sum;
    if (sum < 21) {
      startBtn.textContent = "Want More?";
      isBlackjack = false;
    } else if (sum === 21) {
      startBtn.textContent = "Blackjack";
      isBlackjack = true;
    } else {
      isBlackjack = false;
    }
      isalive = false;
      isAlive = true;
  }
}
function newCard() {
  if (isAlive === true && isBlackjack === false) {
    randomCard()
    sum += randomElement;
    cards.textContent += randomElement + " ";
    result.textContent = sum;
    if (sum > 21) {
      message = "Oops! You Lost";
      isAlive = false;
    } else if (sum === 21) {
      message = "Blackjack!!!";
      isBlackjack = true;
    } else {
      message = "New Card?";
      isAlive = true;
    }
    if (isAlive === true ) {
      startBtn.textContent = message;
    } else if (isBlackjack === true) {
      startBtn.textContent = message;
    } else if (isAlive === false) {
      startBtn.textContent = message;
    }
  }
}
