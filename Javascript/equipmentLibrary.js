document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementsByClassName('equipment-content')[0];

    var library = [
        "Images/Equipment/Greenwood Garb.jpg",
        "Images/Equipment/Ever-Bloom.jpg",
        "Images/Equipment/Wanderer's Wish.jpg",
        "Images/Equipment/Endless Road.jpg",
        "Images/Equipment/Duelling Sword.jpg",
        "Images/Equipment/Fate-Bender.jpg",
        "Images/Equipment/Iron-Render.jpg",
        "Images/Equipment/Moon-Caller.jpg",
        "Images/Equipment/Sun-Silver.jpg",
        "Images/Equipment/Will-Carver.jpg",
        "Images/Equipment/Dunedain Banner.jpg",
        "Images/Equipment/War-Haven.jpg",
        "Images/Equipment/War-Maker.jpg",
        "Images/Equipment/Hope's Beacon.jpg"
    ]

    for (let i = 0; i < library.length; i++) {
        var card = document.createElement('div');
        card.className = 'equipment-box';

        var cardImage = document.createElement('img');
        cardImage.className = 'equipmentImages';
        cardImage.src = library[i];

        card.appendChild(cardImage);
        container.appendChild(card);
    }
});