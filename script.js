let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = cards[0] + cards[1];
let isBlackJacked = false;
let isAlive = true;
let message = " ";
function startgame() {
  if (sum < 21) {
    message = "Do you wanna pickup one more card?";
    document.getElementById("new-card").style.display = "inline-block";
  } else if (sum === 21) {
    message = "Wohoo! You gotta BlackJack";
    isBlackJacked = true;
    document.getElementById("new-card").style.display = "none";
    document.getElementById("reload").style.display = "inline-block";
  } else {
    message = "Sorry you're out of the game";
    isAlive = false;
    document.getElementById("start").style.display = "none";
    document.getElementById("new-card").style.display = "none";
    document.getElementById("reload").style.display = "inline-block";
  }
  document.getElementById("cards-el").textContent = "Cards : ";
  for(let i in cards){
    document.getElementById("cards-el").textContent += cards[i] + "  ";
  }
  document.getElementById("start").style.display = "none";
  document.getElementById("message-el").textContent = message;
  document.getElementById("sum-el").textContent = "Sum : " + sum;
}
function newCard(){
  let newCard = getRandomCard()
  cards.push(newCard);
  sum += cards[cards.length-1];
  startgame();
}
function getRandomCard(){
  return (Math.floor(Math.random() * 10) + 2);
}