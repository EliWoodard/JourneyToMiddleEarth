document.addEventListener('DOMContentLoaded', function() {
  const addCreatureButton = document.querySelector('.addCreatureButton');
  const creatureModal = document.querySelector('.creatureModal');
  const creatureSave = document.querySelector('.creatureSave');

  function Card3D(card, ev) {
    let img = card.querySelector('img');
    if (img) {
      let cardRect = card.getBoundingClientRect();
      let mouseX = ev.clientX - cardRect.left;
      let mouseY = ev.clientY - cardRect.top;
      let rotateY = map(mouseX, 0, cardRect.width, -25, 25);
      let rotateX = map(mouseY, 0, cardRect.height, 25, -25);
      let brightness = map(mouseY, 0, cardRect.height, 1.5, 0.5);

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      img.style.filter = `brightness(${brightness})`;
    }
  }

  addCreatureButton.addEventListener('click', function() {
    creatureModal.style.display = 'block';
  });

  window.addEventListener('click', function(event) {
    if (event.target == creatureModal) {
      creatureModal.style.display = 'none';
    }
  });

  let selectedCreatures = JSON.parse(localStorage.getItem('selectedCreatures')) || [];

  const creatureBoxes = document.querySelectorAll('.creatureModal-box');

  creatureBoxes.forEach(function(creatureBox) {
    const image = creatureBox.querySelector('.creatureImages');
    const imageSrc = image.src;

    if (selectedCreatures.includes(imageSrc)) {
      const newImageContainer = document.createElement('div');
      newImageContainer.classList.add('creatureCardProp');

      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.classList.add('creatureImageDisplay');

      newImageContainer.appendChild(newImage);
      creatureSave.appendChild(newImageContainer);

      creatureBox.classList.add('selectedCreature');

      newImageContainer.addEventListener('mousemove', function(event) {
        Card3D(newImageContainer, event);
      });

      newImageContainer.addEventListener('mouseleave', function() {
        newImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        newImage.style.filter = 'brightness(1)';
      });
    }
  });

    creatureBoxes.forEach(function(creatureBox) {
    creatureBox.addEventListener('click', function() {
      const image = creatureBox.querySelector('.creatureImages');
      const imageSrc = image.src;

      if (selectedCreatures.includes(imageSrc)) {
        const containerToRemove = creatureSave.querySelector(`.creatureCardProp > img[src="${imageSrc}"]`).parentNode;
        creatureSave.removeChild(containerToRemove);

        const index = selectedCreatures.indexOf(imageSrc);
        selectedCreatures.splice(index, 1);

        creatureBox.classList.remove('selectedCreature');
      } else {
        const newImageContainer = document.createElement('div');
        newImageContainer.classList.add('creatureCardProp');

        const newImage = document.createElement('img');
        newImage.src = imageSrc;
        newImage.classList.add('creatureImageDisplay');

        newImageContainer.appendChild(newImage);
        creatureSave.appendChild(newImageContainer);

        selectedCreatures.push(imageSrc);

        creatureBox.classList.add('selectedCreature');

        newImageContainer.addEventListener('mousemove', function(event) {
          Card3D(newImageContainer, event);
        });

        newImageContainer.addEventListener('mouseleave', function() {
          newImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
          newImage.style.filter = 'brightness(1)';
        });
      }

      localStorage.setItem('selectedCreatures', JSON.stringify(selectedCreatures));
    });
  });
});
