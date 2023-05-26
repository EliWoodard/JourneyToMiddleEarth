document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('buildDeckButton').addEventListener('click', buildDeck);
  document.getElementById('shuffleTheDeck').addEventListener('click', shuffleDeck);
  document.querySelector('.scoutButton').addEventListener('click', scout);
  document.querySelector('.addAWeakness').addEventListener('click', addWeakness);
  document.querySelector('.shuffleIntoTheDeck').addEventListener('click', shuffleIntoDeck);

  window.addEventListener('click', function(event) {
    let scoutDisplayBackground = document.getElementById('scoutDisplayBackground');
    if (event.target === scoutDisplayBackground) {
      performPendingActions();
      document.getElementById('scoutDisplay').style.display = 'none';
      scoutDisplayBackground.style.display = 'none'; 
    }
  }); 
});

let deckContainer = [];
let topDeck = [];
let bottomDeck = [];
let scoutedCards = []; 
let discardPile = [];
let cardCount = 0;
let numberElement;

function buildDeck() {
  deckContainer = [];
  cardCount = 0;

  let cards = document.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
      numberElement = cards[i].querySelector('.number');
      let cardCountInDeck = Number(numberElement.innerText);

      if (cardCountInDeck > 0) {
          let cardDetails = cards[i].querySelector('.cardImage img').alt;
          let cardImage = cards[i].querySelector('.cardImage img').getAttribute('src');

          for(let j = 0; j < cardCountInDeck; j++) {
              deckContainer.push({name: cardDetails, img: cardImage});
              cardCount++;
          }
      }
  }

  updateDeckCountDisplay();
}

function shuffleDeck() {
  for (let i = deckContainer.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [deckContainer[i], deckContainer[j]] = [deckContainer[j], deckContainer[i]];
  }
  console.log(deckContainer);
}

let pendingActions = [];

function scout() {
  let numberInput = document.getElementById('myNumberInput');
  let scoutCount = Number(numberInput.value);
  let scoutDisplay = document.getElementById('scoutDisplay');

  if(scoutCount > deckContainer.length) {
    shuffleIntoDeck();
  }

  scoutedCards = deckContainer.splice(0, scoutCount); 

  while(scoutDisplay.firstChild) {
      scoutDisplay.removeChild(scoutDisplay.firstChild);
  }

  for(let i = 0; i < scoutCount; i++) {
      let card = scoutedCards[i]; 
      let cardContainer = document.createElement('div');
      let img = document.createElement('img');
      let topButton = document.createElement('button');
      let bottomButton = document.createElement('button');
      let prepButton = document.createElement('button');
      let discardButton = document.createElement('button'); // New button

      img.src = card.img;
      img.alt = card.name;
      img.classList.add('scoutedCard');

      topButton.textContent = 'Top';
      topButton.addEventListener('click', function() {
        topDeck = [scoutedCards[i], ...topDeck];
        scoutedCards[i] = null;
        cardContainer.style.display = 'none';
      });

      bottomButton.textContent = 'Bottom';
      bottomButton.addEventListener('click', function() {
        bottomDeck = [...bottomDeck, scoutedCards[i]]; 
        scoutedCards[i] = null;
        cardContainer.style.display = 'none';
      });

      prepButton.textContent = 'Prep';
      prepButton.addEventListener('click', function() {
        pendingActions.push({ action: 'moveToPrep', card: scoutedCards[i] });
        scoutedCards[i] = null;
        cardContainer.style.display = 'none';
    });

      // New discard button
      discardButton.textContent = 'Discard';
      discardButton.addEventListener('click', function() {
        discardPile.push(scoutedCards[i]);
        scoutedCards[i] = null;
        cardContainer.style.display = 'none';
        cardCount--;
        updateDeckCountDisplay();
        displayTopDiscard();  // Update the discard display
      });

      cardContainer.appendChild(img);
      cardContainer.appendChild(topButton);
      cardContainer.appendChild(bottomButton);
      cardContainer.appendChild(prepButton);
      cardContainer.appendChild(discardButton); // New button appended
      cardContainer.classList.add('scoutCardProperties');

      scoutDisplay.appendChild(cardContainer);
  }

  document.getElementById('scoutDisplay').style.display = 'flex';
  document.getElementById('scoutDisplayBackground').style.display = 'flex';
}


function moveToTop(index) {
  let card = deckContainer.splice(index, 1)[0];
  topDeck.unshift(card);
}


function moveToBottom(index) {
  let card = deckContainer.splice(index, 1)[0];
  bottomDeck.push(card);
}


function moveToPrep(card) {  
  let prepContainer = document.querySelector('.prepedCardContainer');
  let img = document.createElement('img');

  img.src = card.img;
  img.alt = card.name;
  img.classList.add('prepedCard');

  img.addEventListener('click', function() {
    discardPile.push(card);
    prepContainer.removeChild(img);
    displayTopDiscard();  
  });
  

  prepContainer.appendChild(img);
  cardCount--;
  updateDeckCountDisplay();
}

function updateDeckCountDisplay() {
  let cardBack = document.querySelector('.cardBack');
  let cardCountDisplay = document.querySelector('.cardCount');

  if(cardCount > 0) {
      cardBack.style.display = 'flex';
      cardCountDisplay.textContent = cardCount;
  } else {
      cardBack.style.display = 'none';
      cardCountDisplay.textContent = '';
  }
}

function performPendingActions() {
  scoutedCards = scoutedCards.filter(card => card !== null);
  pendingActions.sort((a, b) => b.index - a.index);

  for (let action of pendingActions) {
    if (action.action === 'moveToPrep') {
      moveToPrep(action.card);  
  } else if (action.action === 'moveToBottom') {
      moveToBottom(action.index);
    } else if (action.action === 'moveToPrep') {
      moveToPrep(action.index);
    }
  }

  deckContainer = topDeck.concat(scoutedCards, deckContainer, bottomDeck);
  topDeck = [];
  bottomDeck = [];
  scoutedCards = [];
  pendingActions = []; 
}

function displayTopDiscard() {
  let discardContainer = document.querySelector('.discardContainer');
  
  if (discardContainer.firstChild) {
    discardContainer.removeChild(discardContainer.firstChild);
  }
  
  if (discardPile.length > 0) {
    let img = document.createElement('img');
    let topCard = discardPile[discardPile.length - 1]; 
    
    img.src = topCard.img;
    img.alt = topCard.name;
    img.classList.add('discardCard');  
    
    discardContainer.appendChild(img);
  }
}

let weaknessCard = { name: 'Weakness', img: 'Images/Misc/Weakness.jpg' };

function addWeakness() {
    deckContainer.push(weaknessCard);
    cardCount++;
    shuffleDeck();
    updateDeckCountDisplay();
}

function shuffleIntoDeck() {
  deckContainer = deckContainer.concat(discardPile);
  discardPile = [];
  cardCount = deckContainer.length;

  shuffleDeck();

  updateDeckCountDisplay();

  let discardContainer = document.querySelector('.discardContainer');
  if (discardContainer.firstChild) {
    discardContainer.removeChild(discardContainer.firstChild);
  }
}


