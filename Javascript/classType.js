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
      "Images/Herbalist/Curiosity.jpg",
      "Images/Herbalist/Gathered Wisdom1.jpg",
      "Images/Herbalist/Gathered Wisdom2.jpg",
      "Images/Herbalist/Study of Nature.jpg",
      "Images/Herbalist/Hands of a Healer.jpg",
      "Images/Herbalist/Insight.jpg",
      "Images/Herbalist/Calming Presence.jpg",
      "Images/Herbalist/Athelas.jpg",
      "Images/Herbalist/Natural Remedy.jpg",
      "Images/Herbalist/Innovation.jpg",
      "Images/Herbalist/Phosphorescence.jpg",
      "Images/Herbalist/Healing Poultice.jpg"
    ],
    'provisionerButton': [
      "Images/Provisioner/Foraging.jpg",
      "Images/Provisioner/Waybread1.jpg",
      "Images/Provisioner/Waybread2.jpg",
      "Images/Provisioner/Mending.jpg",
      "Images/Provisioner/Gathering.jpg",
      "Images/Provisioner/Good Cheer.jpg",
      "Images/Provisioner/Herbs.jpg",
      "Images/Provisioner/Respite.jpg",
      "Images/Provisioner/Pleasant Company.jpg",
      "Images/Provisioner/Heavy Packs.jpg",
      "Images/Provisioner/Feasting.jpg",
      "Images/Provisioner/Hope Renewed.jpg"
    ],
    'delverButton': [
      "Images/Delver/Intrepid.jpg",
      "Images/Delver/Shadow Sight1.jpg",
      "Images/Delver/Shadow Sight2.jpg",
      "Images/Delver/Wiles.jpg",
      "Images/Delver/Crushing Blow.jpg",
      "Images/Delver/Boasting.jpg",
      "Images/Delver/Forging Ahead.jpg",
      "Images/Delver/Spirit of Adventure.jpg",
      "Images/Delver/No Stone Unturned1.jpg",
      "Images/Delver/No Stone Unturned2.jpg",
      "Images/Delver/Glory.jpg",
      "Images/Delver/Treasures Untold.jpg"
    ],
    'tricksterButton': [
      "Images/Trickster/Merry Chase.jpg",
      "Images/Trickster/Chicanery1.jpg",
      "Images/Trickster/Chicanery2.jpg",
      "Images/Trickster/Clever Distraction.jpg",
      "Images/Trickster/Improvisation.jpg",
      "Images/Trickster/Trick up Your Sleeve.jpg",
      "Images/Trickster/Cutting Remark.jpg",
      "Images/Trickster/Gallows Humor.jpg",
      "Images/Trickster/Look over There!.jpg",
      "Images/Trickster/Confusticate.jpg",
      "Images/Trickster/Eye for Opportunity.jpg",
      "Images/Trickster/Quite a Spectacle.jpg"
    ],
    'beastFriendButton': [
      "Images/Beast-Friend/Chittering Mouse.jpg",
      "Images/Beast-Friend/Nightingale.jpg",
      "Images/Beast-Friend/Pet Rabbit.jpg",
      "Images/Beast-Friend/Band of Squirrels.jpg",
      "Images/Beast-Friend/Lome.jpg",
      "Images/Beast-Friend/Iron Hills Goat.jpg"
    ],
    'soldierButton': [
      "Images/Soldier/Comrade in Arms.jpg",
      "Images/Soldier/Love of War and Valour1.jpg",
      "Images/Soldier/Love of War and Valour2.jpg",
      "Images/Soldier/Fighting Advance1.jpg",
      "Images/Soldier/Fighting Advance2.jpg",
      "Images/Soldier/Fighting Advance3.jpg",
      "Images/Soldier/On Your Orders1.jpg",
      "Images/Soldier/On Your Orders2.jpg",
      "Images/Soldier/Sleep Anywhere1.jpg",
      "Images/Soldier/Sleep Anywhere2.jpg",
      "Images/Soldier/Break the Wave1.jpg",
      "Images/Soldier/Break the Wave2.jpg"
    ],
    'smithButton': [
      "Images/Smith/Reforging.jpg",
      "Images/Smith/Thrice-Forged Steel.jpg",
      "Images/Smith/Thrice-Forged Steel2.jpg",
      "Images/Smith/Unbowed.jpg",
      "Images/Smith/Industrious1.jpg",
      "Images/Smith/Industrious2.jpg",
      "Images/Smith/Strike the Anvil.jpg",
      "Images/Smith/Dwarf-Linked Rings.jpg",
      "Images/Smith/Elf-Wrights' Grace.jpg",
      "Images/Smith/Craft of Men.jpg",
      "Images/Smith/Cirth Inscription.jpg",
      "Images/Smith/Forge's Fire.jpg"
    ],
    'shieldmaidenButton': [
      "Images/Shieldmaiden/As One1.jpg",
      "Images/Shieldmaiden/Call to Glory1.jpg",
      "Images/Shieldmaiden/Call to Glory2.jpg",
      "Images/Shieldmaiden/Taunting Cry.jpg",
      "Images/Shieldmaiden/As One2.jpg",
      "Images/Shieldmaiden/Press the Advantage.jpg",
      "Images/Shieldmaiden/Back to Back.jpg",
      "Images/Shieldmaiden/Momentum.jpg",
      "Images/Shieldmaiden/Force Them Back.jpg",
      "Images/Shieldmaiden/Flanking Strike.jpg",
      "Images/Shieldmaiden/Overrun.jpg",
      "Images/Shieldmaiden/Carry the Day.jpg"
    ],
    'pathfinderButton': [
      "Images/Pathfinder/Trailblazer.jpg",
      "Images/Pathfinder/Paths Unseen1.jpg",
      "Images/Pathfinder/Paths Unseen2.jpg",
      "Images/Pathfinder/Word of Warning.jpg",
      "Images/Pathfinder/Baited Trap.jpg",
      "Images/Pathfinder/Trail Sign.jpg",
      "Images/Pathfinder/Ambush.jpg",
      "Images/Pathfinder/Ambush2.jpg",
      "Images/Pathfinder/A Shortcut.jpg",
      "Images/Pathfinder/Find a Way.jpg",
      "Images/Pathfinder/Unstoppable.jpg",
      "Images/Pathfinder/Honed Instinct.jpg"
    ],
    'meddlerButton': [
      "Images/Meddler/Nosy.jpg",
      "Images/Meddler/Guidance1.jpg",
      "Images/Meddler/Guidance2.jpg",
      "Images/Meddler/Gossip.jpg",
      "Images/Meddler/Fast Talking.jpg",
      "Images/Meddler/Interfering.jpg",
      "Images/Meddler/Ancient Legend.jpg",
      "Images/Meddler/Contemplation.jpg",
      "Images/Meddler/Flattery.jpg",
      "Images/Meddler/Hidden Plans.jpg",
      "Images/Meddler/Quick Temper.jpg",
      "Images/Meddler/Strong Opinion.jpg"
    ],
    'lorekeeperButton': [
      "Images/Lorekeeper/Preparation.jpg",
      "Images/Lorekeeper/Childhood Tales1.jpg",
      "Images/Lorekeeper/Childhood Tales2.jpg",
      "Images/Lorekeeper/Driven by Knowledge.jpg",
      "Images/Lorekeeper/Wisdom beyond Years.jpg",
      "Images/Lorekeeper/Wit beyond Measure.jpg",
      "Images/Lorekeeper/Ancestry.jpg",
      "Images/Lorekeeper/Collector.jpg",
      "Images/Lorekeeper/Secrets of the Wide World.jpg",
      "Images/Lorekeeper/Song of History.jpg",
      "Images/Lorekeeper/Keeper of the Chronicle.jpg",
      "Images/Lorekeeper/Exploit Weakness.jpg"
    ],
    'guideButton': [
      "Images/Guide/Great Hound.jpg",
      "Images/Guide/The Way Forward1.jpg",
      "Images/Guide/The Way Forward2.jpg",
      "Images/Guide/Helping Hand.jpg",
      "Images/Guide/Point the Way.jpg",
      "Images/Guide/Lead by Example.jpg",
      "Images/Guide/Alert.jpg",
      "Images/Guide/Ancient Trails.jpg",
      "Images/Guide/Teamwork.jpg",
      "Images/Guide/Survival Training.jpg",
      "Images/Guide/All Together.jpg",
      "Images/Guide/Timely Assistance.jpg"
    ],
    'aragornButton': [
      "Images/Aragorn/Wanderer.jpg",
      "Images/Aragorn/Strider.jpg",
      "Images/Aragorn/Thorongil.jpg",
      "Images/Aragorn/Gift of Men.jpg"
    ],
    'basicButton': [
      "Images/Basic/Undying Might.jpg",
      "Images/Basic/Honed Agility.jpg",
      "Images/Basic/Unyielding Spirit.jpg",
      "Images/Basic/Ancient Wisdom.jpg",
      "Images/Basic/Clever Wit.jpg",
      "Images/Basic/Time of Need.jpg"
    ],
    'titleButton': [
      "Images/Title/Mist-Walker.jpg",
      "Images/Title/Stone-Talker.jpg",
      "Images/Title/Pack-Dweller.jpg",
      "Images/Title/Dwarf-Friend.jpg",
      "Images/Title/Word-Wielder.jpg",
      "Images/Title/Clue-Finder.jpg",
      "Images/Title/Stinging Fly.jpg",
      "Images/Title/Wingfoot.jpg",
      "Images/Title/Friend of Bears.jpg",
      "Images/Title/Fire-Giver.jpg",
      "Images/Title/Gale-Rock.jpg",
      "Images/Title/Stormcrow.jpg",
      "Images/Title/Unfallen.jpg",
      "Images/Title/Elf-Friend.jpg",
      "Images/Title/Coney-Foot.jpg",
      "Images/Title/Skin-Changer.jpg",
      "Images/Title/Barrel Rider.jpg",
      "Images/Title/Flame-Bearer.jpg",
      "Images/Title/Guest of Eagles.jpg",
      "Images/Title/Luckwearer.jpg",
      "Images/Title/Lone-Survivor.jpg",
      "Images/Title/Nemesis.jpg",
      "Images/Title/Lore-Master.jpg",
      "Images/Title/Ever-Wary.jpg",
      "Images/Title/Treasure Seeker.jpg",
      "Images/Title/Storyteller.jpg",
      "Images/Title/Dawn-Bringer.jpg",
      "Images/Title/Undying.jpg",
      "Images/Title/Sly-Tongue.jpg",
      "Images/Title/Spirit-Bonded.jpg",
      "Images/Title/Friend of Gondor.jpg",
      "Images/Title/Friend of Rohan.jpg",
      "Images/Title/Beast-Singer.jpg"
    ],
    'weaknessButton': [
      "Images/Misc/Weakness.jpg"
    ]
  };


  var preloadedImages = {};

  function preloadImages(imageMap) {
    for (var buttonId in imageMap) {
      var imageFilenames = imageMap[buttonId];
      imageFilenames.forEach(function (filename) {
        var img = new Image();
        img.src = filename;
        preloadedImages[filename] = img; // Store the preloaded image in the preloadedImages object.
      });
    }
  }

  preloadImages(imageMap);

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var buttonId = this.id;
      var imageFilenames = imageMap[buttonId];

      for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
      }

      this.classList.add('active');

      while (cardContainer.firstChild) {
        cardContainer.firstChild.remove();
      }

      imageFilenames.forEach(function (filename) {
        var card = document.createElement('div');
        card.className = 'card';

        var cardImage = document.createElement('div');
        cardImage.className = 'cardImage';

        var img = preloadedImages[filename].cloneNode();
        img.className = 'card-image';


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
        number.innerText = localStorage.getItem(filename) || '0';
        amountOfCard.appendChild(number);

        var plus = document.createElement('div');
        plus.className = 'plus';
        plus.innerText = '+';
        amountOfCard.appendChild(plus);

        card.appendChild(cardImage);
        card.appendChild(amountOfCard);

        cardContainer.appendChild(card);


        plus.addEventListener('click', function (event) {
          event.stopPropagation();
          var count = parseInt(number.innerText);
          count++;
          number.innerText = count.toString();
          localStorage.setItem(filename, count.toString());
        });

        minus.addEventListener('click', function (event) {
          event.stopPropagation();
          var count = parseInt(number.innerText);
          if (count > 0) {
            count--;
          }
          number.innerText = count.toString();
          localStorage.setItem(filename, count.toString());
        });
      });
    });
  }

  document.getElementById('aragornButton').click();
});