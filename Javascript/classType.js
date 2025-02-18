document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.getElementsByClassName('vertical-button');
  var cardContainer = document.getElementById('classType');

  var imageMap = {
    'eleanorButton': [
      "Images/Eleanor/Eleanor1.jpg",
      "Images/Eleanor/Eleanor2.jpg",
      "Images/Eleanor/Eleanor3.jpg",
      "Images/Eleanor/Eleanor4.jpg",
      "Images/Eleanor/Eleanor5.jpg"
    ],
    'arwenButton': [
      "Images/Arwen/Arwen1.jpg",
      "Images/Arwen/Arwen2.jpg",
      "Images/Arwen/Arwen3.jpg",
      "Images/Arwen/Arwen4.jpg",
      "Images/Arwen/Arwen5.jpg"
    ],
    'calaminthButton': [
      "Images/Calaminth/Calaminth1.jpg",
      "Images/Calaminth/Calaminth2.jpg",
      "Images/Calaminth/Calaminth3.jpg",
      "Images/Calaminth/Calaminth4.jpg",
      "Images/Calaminth/Calaminth5.jpg"
    ],
    'disButton': [
      "Images/Dis/Dis1.jpg",
      "Images/Dis/Dis2.jpg",
      "Images/Dis/Dis3.jpg",
      "Images/Dis/Dis4.jpg",
      "Images/Dis/Dis5.jpg"
    ],
    'dwalinButton': [
      "Images/Dwalin/Dwalin1.jpg",
      "Images/Dwalin/Dwalin2.jpg",
      "Images/Dwalin/Dwalin3.jpg",
      "Images/Dwalin/Dwalin4.jpg",
      "Images/Dwalin/Dwalin5.jpg"
    ],
    'boromirButton': [
      "Images/Boromir/Boromir1.jpg",
      "Images/Boromir/Boromir2.jpg",
      "Images/Boromir/Boromir3.jpg",
      "Images/Boromir/Boromir4.jpg",
      "Images/Boromir/Boromir5.jpg"
    ],
    'elenaButton': [
      "Images/Elena/Elena1.jpg",
      "Images/Elena/Elena2.jpg",
      "Images/Elena/Elena3.jpg",
      "Images/Elena/Elena4.jpg",
      "Images/Elena/Elena5.jpg"
    ],
    'renerienButton': [
      "Images/Renerien/Renerien1.jpg",
      "Images/Renerien/Renerien2.jpg",
      "Images/Renerien/Renerien3.jpg",
      "Images/Renerien/Renerien4.jpg",
      "Images/Renerien/Renerien5.jpg"
    ],
    'balinButton': [
      "Images/Balin/Balin1.jpg",
      "Images/Balin/Balin2.jpg",
      "Images/Balin/Balin3.jpg",
      "Images/Balin/Balin4.jpg",
      "Images/Balin/Balin5.jpg"
    ],
    'freahildButton': [
      "Images/Freahild/Freahild1.jpg",
      "Images/Freahild/Freahild2.jpg",
      "Images/Freahild/Freahild3.jpg",
      "Images/Freahild/Freahild4.jpg",
      "Images/Freahild/Freahild5.jpg"
    ],
    'bilboButton': [
      "Images/Bilbo/Bilbo1.jpg",
      "Images/Bilbo/Bilbo2.jpg",
      "Images/Bilbo/Bilbo3.jpg",
      "Images/Bilbo/Bilbo4.jpg",
      "Images/Bilbo/Bilbo5.jpg"
    ],
    'beravorButton': [
      "Images/Beravor/Beravor1.jpg",
      "Images/Beravor/Beravor2.jpg",
      "Images/Beravor/Beravor3.jpg",
      "Images/Beravor/Beravor4.jpg",
      "Images/Beravor/Beravor5.jpg"
    ],
    'gandalfButton': [
      "Images/Gandalf/Gandalf1.jpg",
      "Images/Gandalf/Gandalf2.jpg",
      "Images/Gandalf/Gandalf3.jpg",
      "Images/Gandalf/Gandalf4.jpg",
      "Images/Gandalf/Gandalf5.jpg"
    ],
    'legolasButton': [
      "Images/Legolas/Legolas1.jpg",
      "Images/Legolas/Legolas2.jpg",
      "Images/Legolas/Legolas3.jpg",
      "Images/Legolas/Legolas4.jpg",
      "Images/Legolas/Legolas5.jpg"
    ],
    'gimliButton': [
      "Images/Gimli/Gimli1.jpg",
      "Images/Gimli/Gimli2.jpg",
      "Images/Gimli/Gimli3.jpg",
      "Images/Gimli/Gimli4.jpg",
      "Images/Gimli/Gimli5.jpg"
    ],
    'beornButton': [
      "Images/Beorn/Beorn1.jpg",
      "Images/Beorn/Beorn2.jpg",
      "Images/Beorn/Beorn3.jpg",
      "Images/Beorn/Beorn4.jpg",
      "Images/Beorn/Beorn5.jpg"
    ],
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
      "Images/Basic/Basic1.jpg",
      "Images/Basic/Basic2.jpg",
      "Images/Basic/Basic3.jpg",
      "Images/Basic/Basic4.jpg",
      "Images/Basic/Basic5.jpg",
      "Images/Basic/Basic6.jpg"
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
        preloadedImages[filename] = img;
      });
    }
  }

  var preloadedImages = {};

  function preloadImages(imageMap) {
    for (var buttonId in imageMap) {
      var imageFilenames = imageMap[buttonId];
      imageFilenames.forEach(function (filename) {
        var img = new Image();
        img.src = filename;
        preloadedImages[filename] = img;
      });
    }
  }
  
  preloadImages(imageMap);
  
  var allCards = {};
  var captainCards = [];
  for (var buttonId in imageMap) {
    var imageFilenames = imageMap[buttonId];
    allCards[buttonId] = [];
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
  
      var minus = document.createElement('button');
      minus.className = 'minus';
      minus.innerText = '-';
      amountOfCard.appendChild(minus);
  
      var number = document.createElement('div');
      number.className = 'number';
      number.innerText = localStorage.getItem(filename) || '0';
      amountOfCard.appendChild(number);
  
      var plus = document.createElement('button');
      plus.className = 'plus';
      plus.innerText = '+';
      amountOfCard.appendChild(plus);
  
      card.appendChild(cardImage);
      card.appendChild(amountOfCard);
  
      cardContainer.appendChild(card);
      allCards[buttonId].push(card);
  
      if (buttonId === 'captainButton') {
        captainCards.push(card);
      }
  
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
  }
  
  for (var id in allCards) {
    if (id !== 'captainButton') {
      allCards[id].forEach(function (card) {
        card.style.display = 'none';
      });
    }
  }
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var buttonId = this.id;
  
      for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
      }
  
      this.classList.add('active');
  
      for (var id in allCards) {
        if (id === 'captainButton') {
          if (buttonId === 'captainButton') {
            captainCards.forEach(function (card) {
              card.style.display = 'block';
            });
          } else {
            captainCards.forEach(function (card) {
              card.style.display = 'none';
            });
          }
        } else {
          allCards[id].forEach(function (card) {
            card.style.display = 'none';
          });
        }
      }
  
      allCards[buttonId].forEach(function (card) {
        card.style.display = 'block';
      });
    });
  }
  
  document.getElementById('aragornButton').click();
  
});  