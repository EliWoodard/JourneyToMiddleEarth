document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#choosablePlayers');
    const playerImageContainer = document.querySelector('.player-image-container');

    function createInspirationCounter() {
        const counterDiv = document.createElement('div');
        counterDiv.classList.add('insperation-counter');

        let counter = 0;

        const decrementBtn = document.createElement('button');
        decrementBtn.classList.add('counter-btn', 'decrement');
        decrementBtn.textContent = '-';
        decrementBtn.addEventListener('click', () => {
            if (counter > 0) {
                counter--;
                counterValue.textContent = counter;
            }
        });

        const counterValue = document.createElement('div');
        counterValue.classList.add('counter-value');
        counterValue.textContent = counter;

        const incrementBtn = document.createElement('button');
        incrementBtn.classList.add('counter-btn', 'increment');
        incrementBtn.textContent = '+';
        incrementBtn.addEventListener('click', () => {
            if (counter < 9) {
                counter++;
                counterValue.textContent = counter;
            }
        });

        counterDiv.appendChild(decrementBtn);
        counterDiv.appendChild(counterValue);
        counterDiv.appendChild(incrementBtn);

        return counterDiv;
    }

    for (let i = 1; i < 36; i += 2) {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('characterCard');

        const img = document.createElement('img');
        img.classList.add('characterImage');
        img.src = `Images/CharacterCards/${i}.jpg`;
        img.alt = `Image ${i}`;

        imageDiv.appendChild(img);
        container.appendChild(imageDiv);

        imageDiv.addEventListener('click', function() {
            // Clear previous content in currentPlayer and playerImageContainer
            currentPlayer.innerHTML = '';
            playerImageContainer.innerHTML = '';

            // Append new image to currentPlayer
            const clonedImgForCurrentPlayer = img.cloneNode(true);
            currentPlayer.appendChild(clonedImgForCurrentPlayer);

            // Append new image and inspiration counter to playerImageContainer
            const clonedImgForImageContainer = img.cloneNode(true);
            playerImageContainer.appendChild(clonedImgForImageContainer);
            playerImageContainer.appendChild(createInspirationCounter());

            // Save the selection in localStorage
            localStorage.setItem('selectedCharacter', i);
        });
    }

    // Load the selection from localStorage if it exists
    const savedCharacter = localStorage.getItem('selectedCharacter');
    if (savedCharacter) {
        const savedCharacterImage = container.querySelector(`img[src="Images/CharacterCards/${savedCharacter}.jpg"]`);
        if (savedCharacterImage) {
            savedCharacterImage.parentElement.click();
        }
    }
});
