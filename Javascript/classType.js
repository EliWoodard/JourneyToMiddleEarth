document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.getElementsByClassName('vertical-button');
  var cardContainer = document.getElementById('classType');

  var imageMap = {
    'captainButton': [
      "Images/Captain/Well Provisioned.jpg",
      "Images/Captain/Lead the Charge.jpg",
      "Images/Captain/Word of Triumph.jpg",
      "Images/Captain/Stand Together.jpg",
      "Images/Captain/A Fey Mood.jpg",
      "Images/Captain/Empowering Words.jpg",
      "Images/Captain/Inspiring Presence.jpg",
      "Images/Captain/To Me!.jpg",
      "Images/Captain/Battle Plan.jpg",
      "Images/Captain/A Wind Among Grass.jpg",
      "Images/Captain/Master Tactician.jpg"
    ],
    'herbalistButton': [
      "Images/Herbalist/Athelas.jpg",
      "Images/Herbalist/Calming Presence.jpg",
      "Images/Herbalist/Curiosity.jpg",
      "Images/Herbalist/Gathered Wisdom1.jpg",
      "Images/Herbalist/Gathered Wisdom2.jpg",
      "Images/Herbalist/Hands of a Healer.jpg",
      "Images/Herbalist/Healing Poultice.jpg",
      "Images/Herbalist/Innovation.jpg",
      "Images/Herbalist/Insight.jpg",
      "Images/Herbalist/Natural Remedy.jpg",
      "Images/Herbalist/Phosphorescence.jpg",
      "Images/Herbalist/Study of Nature.jpg"
    ],
    'provisionerButton': [
      "Images/Provisioner/Feasting.jpg",
      "Images/Provisioner/Foraging.jpg",
      "Images/Provisioner/Gathering.jpg",
      "Images/Provisioner/Good Cheer.jpg",
      "Images/Provisioner/Heavy Packs.jpg",
      "Images/Provisioner/Herbs.jpg",
      "Images/Provisioner/Hope Renewed.jpg",
      "Images/Provisioner/Mending.jpg",
      "Images/Provisioner/Pleasant Company.jpg",
      "Images/Provisioner/Respite.jpg",
      "Images/Provisioner/Waybread1.jpg",
      "Images/Provisioner/Waybread2.jpg"
    ],
    'delverButton': [
      "Images/Delver/Boasting.jpg",
      "Images/Delver/Crushing Blow.jpg",
      "Images/Delver/Forging Ahead.jpg",
      "Images/Delver/Glory.jpg",
      "Images/Delver/Intrepid.jpg",
      "Images/Delver/No Stone Unturned1.jpg",
      "Images/Delver/No Stone Unturned2.jpg",
      "Images/Delver/Shadow Sight1.jpg",
      "Images/Delver/Shadow Sight2.jpg",
      "Images/Delver/Spirit of Adventure.jpg",
      "Images/Delver/Treasures Untold.jpg",
      "Images/Delver/Wiles.jpg"
    ],
    'tricksterButton': [
      "Images/Trickster/Chicanery1.jpg",
      "Images/Trickster/Chicanery2.jpg",
      "Images/Trickster/Clever Distraction.jpg",
      "Images/Trickster/Confusticate.jpg",
      "Images/Trickster/Cutting Remark.jpg",
      "Images/Trickster/Eye for Opportunity.jpg",
      "Images/Trickster/Gallows Humor.jpg",
      "Images/Trickster/Improvisation.jpg",
      "Images/Trickster/Look over There!.jpg",
      "Images/Trickster/Merry Chase.jpg",
      "Images/Trickster/Quite a Spectacle.jpg",
      "Images/Trickster/Trick up Your Sleeve.jpg"
    ],
    'beastFriendButton': [
      "Images/Beast-Friend/Band of Squirrels.jpg",
      "Images/Beast-Friend/Chittering Mouse.jpg",
      "Images/Beast-Friend/Iron Hills Goat.jpg",
      "Images/Beast-Friend/Lome.jpg",
      "Images/Beast-Friend/Nightingale.jpg",
      "Images/Beast-Friend/Pet Rabbit.jpg"
    ],
    'soldierButton': [
      "Images/Soldier/Break the Wave1.jpg",
      "Images/Soldier/Break the Wave2.jpg",
      "Images/Soldier/Comrade in Arms.jpg",
      "Images/Soldier/Fighting Advance1.jpg",
      "Images/Soldier/Fighting Advance2.jpg",
      "Images/Soldier/Fighting Advance3.jpg",
      "Images/Soldier/Love of War and Valour1.jpg",
      "Images/Soldier/Love of War and Valour2.jpg",
      "Images/Soldier/On Your Orders1.jpg",
      "Images/Soldier/On Your Orders2.jpg",
      "Images/Soldier/Sleep Anywhere1.jpg",
      "Images/Soldier/Sleep Anywhere2.jpg"
    ],
    'smithButton': [
      "Images/Smith/Cirth Inscription.jpg",
      "Images/Smith/Craft of Men.jpg",
      "Images/Smith/Dwarf-Linked Rings.jpg",
      "Images/Smith/Elf-Wrights' Grace.jpg",
      "Images/Smith/Forge's Fire.jpg",
      "Images/Smith/Industrious1.jpg",
      "Images/Smith/Industrious2.jpg",
      "Images/Smith/Reforging.jpg",
      "Images/Smith/Strike the Anvil.jpg",
      "Images/Smith/Thrice-Forged Steel.jpg",
      "Images/Smith/Thrice-Forged Steel2.jpg",
      "Images/Smith/Unbowed.jpg"
    ],
    'shieldmaidenButton': [
      "Images/Shieldmaiden/As One1.jpg",
      "Images/Shieldmaiden/As One2.jpg",
      "Images/Shieldmaiden/Back to Back.jpg",
      "Images/Shieldmaiden/Call to Glory1.jpg",
      "Images/Shieldmaiden/Call to Glory2.jpg",
      "Images/Shieldmaiden/Carry the Day.jpg",
      "Images/Shieldmaiden/Flanking Strike.jpg",
      "Images/Shieldmaiden/Force Them Back.jpg",
      "Images/Shieldmaiden/Momentum.jpg",
      "Images/Shieldmaiden/Overrun.jpg",
      "Images/Shieldmaiden/Press the Advantage.jpg",
      "Images/Shieldmaiden/Taunting Cry.jpg"
    ],
    'pathfinderButton': [
      "Images/Pathfinder/A Shortcut.jpg",
      "Images/Pathfinder/Find a Way.jpg",
      "Images/Pathfinder/Trail Sign.jpg",
      "Images/Pathfinder/Ambush.jpg",
      "Images/Pathfinder/Honed Instinct.jpg",
      "Images/Pathfinder/Trailblazer.jpg",
      "Images/Pathfinder/Ambush2.jpg",
      "Images/Pathfinder/Paths Unseen1.jpg",
      "Images/Pathfinder/Unstoppable.jpg",
      "Images/Pathfinder/Baited Trap.jpg",
      "Images/Pathfinder/Paths Unseen2.jpg",
      "Images/Pathfinder/Word of Warning.jpg"
    ],
    'meddlerButton': [
      "Images/Meddler/Ancient Legend.jpg",
      "Images/Meddler/Gossip.jpg",
      "Images/Meddler/Interfering.jpg",
      "Images/Meddler/Contemplation.jpg",
      "Images/Meddler/Guidance1.jpg",
      "Images/Meddler/Nosy.jpg",
      "Images/Meddler/Fast Talking.jpg",
      "Images/Meddler/Guidance2.jpg",
      "Images/Meddler/Quick Temper.jpg",
      "Images/Meddler/Flattery.jpg",
      "Images/Meddler/Hidden Plans.jpg",
      "Images/Meddler/Strong Opinion.jpg"
    ],
    'lorekeeperButton': [
      "Images/Lorekeeper/Ancestry.jpg",
      "Images/Lorekeeper/Keeper of the Chronicle.jpg",
      "Images/Lorekeeper/Childhood Tales1.jpg",
      "Images/Lorekeeper/Preparation.jpg",
      "Images/Lorekeeper/Childhood Tales2.jpg",
      "Images/Lorekeeper/Secrets of the Wide World.jpg",
      "Images/Lorekeeper/Collector.jpg",
      "Images/Lorekeeper/Song of History.jpg",
      "Images/Lorekeeper/Driven by Knowledge.jpg",
      "Images/Lorekeeper/Wisdom beyond Years.jpg",
      "Images/Lorekeeper/Exploit Weakness.jpg",
      "Images/Lorekeeper/Wit beyond Measure.jpg"
    ],
    'guideButton': [
      "Images/Guide/Alert.jpg",
      "Images/Guide/Helping Hand.jpg",
      "Images/Guide/Teamwork.jpg",
      "Images/Guide/All Together.jpg",
      "Images/Guide/Lead by Example.jpg",
      "Images/Guide/The Way Forward1.jpg",
      "Images/Guide/Ancient Trails.jpg",
      "Images/Guide/Point the Way.jpg",
      "Images/Guide/The Way Forward2.jpg",
      "Images/Guide/Great Hound.jpg",
      "Images/Guide/Survival Training.jpg",
      "Images/Guide/Timely Assistance.jpg"
    ]
};

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var buttonId = this.id;
      var imageFilenames = imageMap[buttonId];

      while (cardContainer.firstChild) {
        cardContainer.firstChild.remove();
      }

      imageFilenames.forEach(function (filename) {
        var card = document.createElement('div');
        card.className = 'card';

        var cardImage = document.createElement('div');
        cardImage.className = 'cardImage';

        var img = document.createElement('img');
        img.className = 'card-image';
        img.src = filename;
        cardImage.appendChild(img);

        var amountOfCard = document.createElement('div');
        amountOfCard.className = 'amountOfCard';

        var minus = document.createElement('div');
        minus.className = 'minus';
        minus.innerText = '-';
        amountOfCard.appendChild(minus);

        var number = document.createElement('div');
        number.className = 'number';
        number.innerText = '0';
        amountOfCard.appendChild(number);

        var plus = document.createElement('div');
        plus.className = 'plus';
        plus.innerText = '+';
        amountOfCard.appendChild(plus);

        card.appendChild(cardImage);
        card.appendChild(amountOfCard);

        cardContainer.appendChild(card);
      });
    });
  }
});
