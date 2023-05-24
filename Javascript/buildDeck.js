document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buildDeckButton').addEventListener('click', buildDeck);
  });
  
  // The deckContainer array will store the user's selected cards.
  let deckContainer = [];
  
  function buildDeck() {
    // Clear the deckContainer array
    deckContainer = [];
  
    // Iterate over all the card elements and check the number next to each card.
    let cards = document.getElementsByClassName('card');
  
    for (let i = 0; i < cards.length; i++) {
      let numberElement = cards[i].querySelector('.number');
      let cardCount = Number(numberElement.innerText);
  
      if (cardCount > 0) {
        // This card has been selected, so add it to the deck.
  
        // Get the card's details
        let cardDetails = cards[i].querySelector('.cardImage img').alt;
        let cardImage = cards[i].querySelector('.cardImage img').getAttribute('src');
  
        // Add the card to the deckContainer array for each selected
        for(let j = 0; j < cardCount; j++) {
          deckContainer.push({name: cardDetails, img: cardImage});
        }
      }
    }
  
    // Print the deckContainer array to the console to verify it was populated correctly
    console.log(deckContainer);
  }
  