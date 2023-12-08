document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementsByClassName('equipment-content')[0];

    var library = [
        // Armour
        "Images/Equipment/Greenwood Garb.jpg",
        "Images/Equipment/Ever-Bloom.jpg",
        "Images/Equipment/Wanderer's Wish.jpg",
        "Images/Equipment/Endless Road.jpg",
        // Weapons
        // Swords
        "Images/Equipment/Duelling Sword.jpg",
        "Images/Equipment/Fate-Bender.jpg",
        "Images/Equipment/Iron-Render.jpg",
        "Images/Equipment/Moon-Caller.jpg",
        "Images/Equipment/Sun-Silver.jpg",
        "Images/Equipment/Will-Carver.jpg",
        // Banners
        "Images/Equipment/Dunedain Banner.jpg",
        "Images/Equipment/War-Haven.jpg",
        "Images/Equipment/War-Maker.jpg",
        "Images/Equipment/Hope's Beacon.jpg",
        // Staffs
        "Images/Equipment/Staff.jpg",
        "Images/Equipment/Staff(2).jpg",
        "Images/Equipment/Lone-Land Staff.jpg",
        "Images/Equipment/Staff of the Flame.jpg",
        "Images/Equipment/Maranwe.jpg",
        "Images/Equipment/Ent-Crook.jpg",
        "Images/Equipment/Maiden-Wrath.jpg",
        "Images/Equipment/World's Burden.jpg",
        // Short Bows
        "Images/Equipment/Short Bow.jpg",
        "Images/Equipment/Cavalry Bow.jpg",
        "Images/Equipment/Foe-Blood.jpg",
        "Images/Equipment/Rain-of-Stars.jpg",
        "Images/Equipment/Needle-Threader.jpg",
        // Short Swords
        "Images/Equipment/Short Sword(1).jpg",
        "Images/Equipment/Eredain Short Sword(2).jpg",
        "Images/Equipment/Revenant(3).jpg",
        "Images/Equipment/Dancer on the Wind(4).jpg",
        "Images/Equipment/Scour(5).jpg",
        // Walking Sticks
        "Images/Equipment/Walking Stick.jpg",
        "Images/Equipment/Trusted Walking Stick.jpg",
        "Images/Equipment/Quick-Nick.jpg",
        "Images/Equipment/Constant Companion.jpg",
        "Images/Equipment/Cloud-Chaser.jpg",
        // Misc
        "Images/Equipment/Rending Claws.jpg"
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