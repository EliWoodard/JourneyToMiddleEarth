# Journey to Middle Earth as Aragorn: Digital Deck Manager for the Adventure Card Game

Journey to Middle Earth is a dynamic and intuitive tool designed to allow those who didn't always have his physical deck on hand, effectively manage and track their cards during the Adventure Card Game. This tool emulates the experience of being Aragorn, one of the key characters in the series. Its features range from adding different card types, managing deck and discard piles, adjusting the player's inspiration counter, and even displaying Aragorn's abilities and game states.

## Features 

Journey to Middle Earth offers a myriad of features to streamline your gaming experience:

- **Add Cards**: Buttons are available for adding different types of cards to your deck, including Fear, Damage, Bane, Boon, Terrain, Equipment, Item, and Creature cards.
- **Deck Management**: Tools for deck management include Draw, Shuffle Deck, Shuffle Into Deck, and Add 1 Weakness buttons.
- **Card Draw**: An input box is provided to specify the number of cards to draw from the deck.
- **Card Count Display**: Displays show the number of cards in the deck or discard pile, keeping you updated on your deck's status.
- **Card Containers**: Separate containers are provided for each card type (Fear, Damage, Bane, Terrain, Equipment, Item, Creature, Deck, Discard, Prepped, and Boon), making it easier to view and manage your cards.
- **Tab Switching**: You can easily switch between the deck building interface and the player interface. The deck building interface lets you select which cards are in your deck, while the player interface displays Aragorn's abilities, game states, and inspiration counter.
- **Card Quantity Memory**: The deck building interface retains the quantity of each card type in your deck even after closing the application.
- **Player Interface**: Displays a Play Card featuring Aragorn's states and abilities, and an Inspiration Counter for tracking inspiration tokens.

## File Structure 

Journey to Middle Earth consists of multiple files, each handling a specific functionality:

1. `addBane.js`: Handles the addition of Bane cards.
2. `addBoon.js`: Manages the addition of Boon cards.
3. `addCreature.js`: Handles the addition of Creature cards.
4. `addDamage.js`: Manages the addition of Damage cards.
5. `addEquipment.js`: Handles the addition of Equipment cards.
6. `addFear.js`: Responsible for adding Fear cards.
7. `addItem.js`: Handles the addition of Item cards.
8. `addTerrain.js`: Manages the addition of Terrain cards.
9. `buildDeck.js`: Responsible for building the card deck.
10. `deckIncrement.js`: Manages the incrementing and decrementing of card count in the deck.
11. `flipDamage.js`: Handles the flipping of Damage cards.
12. `flipFear.js`: Manages the flipping of Fear cards.
13. `inspirationCounter.js`: Handles the tracking of the inspiration counter.
14. `manageBoons.js`: Manages Boon cards.
15. `switchTabs.js`: Switches the interface between the player and deck building tabs.

Embrace the Adventure Card Game experience digitally with the Journey to Middle Earth!
