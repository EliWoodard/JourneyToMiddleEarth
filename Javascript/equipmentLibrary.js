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
        "Images/Equipment/Sword.jpg",
        "Images/Equipment/Sword(2).jpg",
        "Images/Equipment/Sword(3).jpg",
        "Images/Equipment/Northern Blade.jpg",
        "Images/Equipment/Elf-Forged Sword.jpg",
        "Images/Equipment/Numenorean Sword.jpg",
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
        // Battle Axes
        "Images/Equipment/Battle Axe.jpg",
        "Images/Equipment/Ered Luin Battle Axe.jpg",
        "Images/Equipment/Iron Hills Battle Axe.jpg",
        "Images/Equipment/Honor-Knell.jpg",
        "Images/Equipment/Grief-Bearer.jpg",
        "Images/Equipment/Sorrow-Sworn.jpg",
        // Daggers
        "Images/Equipment/Dagger(1).jpg",
        "Images/Equipment/Dagger(2).jpg",
        "Images/Equipment/Gondolin Dagger(3).jpg",
        "Images/Equipment/Ered Luin Dagger(4).jpg",
        "Images/Equipment/Blood-Wright(5).jpg",
        "Images/Equipment/Shade-Breaker(6).jpg",
        "Images/Equipment/Widow's Warning(7).jpg",
        "Images/Equipment/Worm's Tooth(8).jpg",
        // Slings
        "Images/Equipment/Sling.jpg",
        "Images/Equipment/Leathern Sling.jpg",
        "Images/Equipment/Whistler.jpg",
        "Images/Equipment/GiantsBane.jpg",
        "Images/Equipment/Shooting Star.jpg",
        // Knifes
        "Images/Equipment/Knife.jpg",
        "Images/Equipment/Knife(2).jpg",
        "Images/Equipment/Hunting Knife.jpg",
        "Images/Equipment/Lindish Knife.jpg",
        "Images/Equipment/Lassemaica.jpg",
        "Images/Equipment/Skinner.jpg",
        "Images/Equipment/Star-Swift.jpg",
        "Images/Equipment/Wicked Smile.jpg",
        // Hammers
        "Images/Equipment/Hammer.jpg",
        "Images/Equipment/Hollowbold Hammer.jpg",
        "Images/Equipment/Sleeping Bell.jpg",
        "Images/Equipment/Mountain-Fall.jpg",
        "Images/Equipment/Bone-Grinder.jpg",
        // Hatchets
        "Images/Equipment/Hatchet.jpg",
        "Images/Equipment/Wanderer's Hatchet.jpg",
        "Images/Equipment/Throat-Seeker.jpg",
        "Images/Equipment/Drake-Tooth.jpg",
        "Images/Equipment/Hunger.jpg",
        // Maces
        "Images/Equipment/Mace.jpg",
        "Images/Equipment/Deft Mace.jpg",
        "Images/Equipment/Bolger's Pride.jpg",
        "Images/Equipment/Hobbler.jpg",
        "Images/Equipment/World-Root.jpg",
        // Great Bows
        "Images/Equipment/Great Bow.jpg",
        "Images/Equipment/Hunting Great Bow.jpg",
        "Images/Equipment/Mirkwood Great Bow.jpg",
        "Images/Equipment/Silver-Fall.jpg",
        "Images/Equipment/Mourning-Song.jpg",
        "Images/Equipment/Bolt-Thrower.jpg",
        /// Horns
        "Images/Equipment/Horn.jpg",
        "Images/Equipment/Horn(2).jpg",
        "Images/Equipment/Gondorian Horn.jpg",
        "Images/Equipment/Sentry's Horn.jpg",
        "Images/Equipment/Clarion Call.jpg",
        "Images/Equipment/Ringing Glory.jpg",
        "Images/Equipment/Starsong.jpg",
        "Images/Equipment/Thunderclap.jpg",
        // Harps
        "Images/Equipment/Harp.jpg",
        "Images/Equipment/Forlindon Harp.jpg",
        "Images/Equipment/Heart's-Rest.jpg",
        "Images/Equipment/River-Calling.jpg",
        "Images/Equipment/Chorus of Light.jpg",
        // Shields
        "Images/Equipment/Shield.jpg",
        "Images/Equipment/Shield(2).jpg",
        "Images/Equipment/Reinforced Shield.jpg",
        "Images/Equipment/Bossed Shield.jpg",
        "Images/Equipment/Ironhide.jpg",
        "Images/Equipment/Flame-Guard.jpg",
        "Images/Equipment/Foe-Blind.jpg",
        "Images/Equipment/Hrinanbenn.jpg",
        // Spears
        "Images/Equipment/Spear.jpg",
        "Images/Equipment/Spear(2).jpg",
        "Images/Equipment/Rohirric Spear.jpg",
        "Images/Equipment/Long Spear.jpg",
        "Images/Equipment/Bough of the White Tree.jpg",
        "Images/Equipment/Dancing Steel.jpg",
        "Images/Equipment/Faengwyr.jpg",
        "Images/Equipment/Isenhild.jpg",
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