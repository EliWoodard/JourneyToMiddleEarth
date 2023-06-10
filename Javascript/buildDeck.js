document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('buildDeckButton').addEventListener('click', buildDeck);
  document.getElementById('shuffleTheDeck').addEventListener('click', shuffleDeck);
  document.querySelector('.scoutButton').addEventListener('click', scout);
  document.querySelector('.addAWeakness').addEventListener('click', addWeakness);
  document.querySelector('.shuffleIntoTheDeck').addEventListener('click', shuffleIntoDeck);
  document.querySelector('.discardContainer').addEventListener('click', showDiscard);

  let scoutDisplay = document.createElement('div');
  scoutDisplay.id = 'scoutDisplay';
  scoutDisplay.style.display = 'none';

  let scoutDisplayBackground = document.createElement('div');
  scoutDisplayBackground.id = 'scoutDisplayBackground';
  scoutDisplayBackground.style.display = 'none';

  document.body.appendChild(scoutDisplay);
  document.body.appendChild(scoutDisplayBackground);

  window.addEventListener('click', function(event) {
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
let discardCounterElement = document.querySelector('.discardCounter');

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
      let discardButton = document.createElement('button'); 

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

      
      discardButton.textContent = 'Discard';
      discardButton.addEventListener('click', function() {
        discardPile.push(scoutedCards[i]);
        scoutedCards[i] = null;
        cardContainer.style.display = 'none';
        cardCount--;
        updateDeckCountDisplay();
        displayTopDiscard();  
      });

      cardContainer.appendChild(img);
      cardContainer.appendChild(topButton);
      cardContainer.appendChild(bottomButton);
      cardContainer.appendChild(prepButton);
      cardContainer.appendChild(discardButton); 
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
  let cardDiv = document.createElement('div');  
  let img = document.createElement('img');

  img.src = card.img;
  img.alt = card.name;
  cardDiv.classList.add('prepedCard');  

  img.addEventListener('click', function() {
    discardPile.push(card);
    prepContainer.removeChild(cardDiv);
    displayTopDiscard();  
    updateDiscardCountDisplay();
  });

  cardDiv.appendChild(img);  
  prepContainer.appendChild(cardDiv);  
  updateDeckCountDisplay();

  cardDiv.addEventListener('mousemove', function(e) {
    let cardRect = cardDiv.getBoundingClientRect();
    let mouseX = e.clientX - cardRect.left;
    let mouseY = e.clientY - cardRect.top;
    let rotateY = map(mouseX, 0, cardRect.width, -25, 25);
    let rotateX = map(mouseY, 0, cardRect.height, 25, -25);
    let brightness = map(mouseY, 0, cardRect.height, 1.5, 0.5);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  });

  cardDiv.addEventListener('mouseleave', function(e) {
    img.style.transform = `rotateX(0deg) rotateY(0deg)`;
    img.style.filter = `brightness(1)`;
  });
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

    img.addEventListener('click', function() {
        displayDiscardPile();
    });
  }

  updateDiscardCountDisplay();
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

  updateDiscardCountDisplay();
}


function updateDiscardCountDisplay() {
  let discardCounterElement = document.querySelector('.discardCounter');
  discardCounterElement.textContent = discardPile.length;
}

function displayDiscardPile() {
  let discardDisplay = document.createElement('div');
  discardDisplay.id = 'discardDisplay';
  discardDisplay.style.display = 'flex';
  document.body.appendChild(discardDisplay);

  let discardDisplayBackground = document.createElement('div');
  discardDisplayBackground.id = 'discardDisplayBackground';
  discardDisplayBackground.style.display = 'flex';
  document.body.appendChild(discardDisplayBackground);

  window.addEventListener('click', function(event) {
    if (event.target === discardDisplayBackground) {
      document.body.removeChild(discardDisplay);
      document.body.removeChild(discardDisplayBackground); 
    }
  });
}

function showDiscard() {
  let discardDisplay = document.getElementById('discardDisplay');

  while (discardDisplay.firstChild) {
    discardDisplay.removeChild(discardDisplay.firstChild);
  }

  for (let i = discardPile.length - 1; i >= 0; i--) {
    let card = discardPile[i];
    let cardContainer = document.createElement('div');
    let img = document.createElement('img');
    let prepButton = document.createElement('button');

    img.src = card.img;
    img.alt = card.name;
    img.classList.add('scoutedCard');

    prepButton.textContent = 'Prep';
    prepButton.addEventListener('click', function () {
        moveToPrep(card);
        discardPile.splice(i, 1); 
        cardContainer.style.display = 'none';
        updateDiscardCountDisplay();
        displayTopDiscard();

        document.body.removeChild(discardDisplay);
        document.body.removeChild(discardDisplayBackground);
    });

    cardContainer.appendChild(img);
    cardContainer.appendChild(prepButton);
    cardContainer.classList.add('scoutCardProperties');

    discardDisplay.appendChild(cardContainer);
}
  
  document.getElementById('discardDisplay').style.display = 'flex';
  document.getElementById('discardDisplayBackground').style.display = 'flex';
}

window.addEventListener('click', function(event) {
  let discardDisplayBackground = document.getElementById('discardDisplayBackground');
  if (event.target === discardDisplayBackground) {
    document.getElementById('discardDisplay').style.display = 'none';
    discardDisplayBackground.style.display = 'none';
  }
}); 

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
