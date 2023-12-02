document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#choosablePlayers');

        for (let i = 1; i < 36; i += 2) {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('characterCard');

            const img = document.createElement('img');
            img.classList.add('characterImage');
            img.src = "Images/CharacterCards/" + i +'.jpg';
            img.alt = 'Image ' + i;

            imageDiv.appendChild(img);
            container.appendChild(imageDiv);
        }
});