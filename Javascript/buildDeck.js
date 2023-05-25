document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('buildDeckButton').addEventListener('click', buildDeck);
  document.getElementById('shuffleTheDeck').addEventListener('click', shuffleDeck);
});

let deckContainer = [];

function buildDeck() {
  deckContainer = [];

  let cards = document.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
      let numberElement = cards[i].querySelector('.number');
      let cardCount = Number(numberElement.innerText);

      if (cardCount > 0) {
          let cardDetails = cards[i].querySelector('.cardImage img').alt;
          let cardImage = cards[i].querySelector('.cardImage img').getAttribute('src');

          for(let j = 0; j < cardCount; j++) {
              deckContainer.push({name: cardDetails, img: cardImage});
          }
      }
  }

  let cardBack = document.querySelector('.cardBack');
  let cardCountDisplay = document.querySelector('.cardCount');

  if(deckContainer.length > 0) {
      cardBack.style.display = 'flex';
      cardCountDisplay.textContent = deckContainer.length;
  } else {
      cardBack.style.display = 'none';
      cardCountDisplay.textContent = '';
  }

  console.log(deckContainer);
}

function shuffleDeck() {
  for (let i = deckContainer.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [deckContainer[i], deckContainer[j]] = [deckContainer[j], deckContainer[i]];
  }
  console.log(deckContainer);
}

