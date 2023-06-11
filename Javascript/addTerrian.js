document.addEventListener('DOMContentLoaded', function() {
  const addTerrianButton = document.querySelector('.addTerrianButton');
  const terrianModal = document.querySelector('.terrian');
  const terrianSave = document.querySelector('.terrianSave');

  const selectedTerrian = [];

  const terrianBoxes = document.querySelectorAll('.terrian-box');

  terrianBoxes.forEach(function(terrianBox) {
    terrianBox.addEventListener('click', function() {
      const imageInBox = terrianBox.querySelector('.terrianImages');
      let imageInContainer;

      if (!selectedTerrian.includes(terrianBox)) {
        imageInContainer = document.createElement('img');
        imageInContainer.src = imageInBox.src;
        imageInContainer.style.height = "100%";
        imageInContainer.style.borderRadius = "5%";
        imageInContainer.classList.add('terrianImageDisplay');

        let newImageContainer = document.createElement('div');
        newImageContainer.classList.add('terrianCardProp');
        newImageContainer.appendChild(imageInContainer);

        terrianSave.appendChild(newImageContainer);
        selectedTerrian.push(terrianBox);
        imageInBox.classList.add('selectedTerrian');

        newImageContainer.addEventListener('mousemove', (ev) => {
          Card3D(newImageContainer, ev);
        });

        newImageContainer.addEventListener('mouseleave', function(ev) {
          imageInContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
          imageInContainer.style.filter = 'brightness(1)';
        });
      } else if (selectedTerrian.includes(terrianBox)) {
        const imageToRemove = terrianSave.querySelector(`div > img[src="${imageInBox.src}"]`);
        const containerToRemove = imageToRemove.parentNode;
        terrianSave.removeChild(containerToRemove);

        const index = selectedTerrian.indexOf(terrianBox);
        selectedTerrian.splice(index, 1);
        imageInBox.classList.remove('selectedTerrian');
      }
    });
  });

  addTerrianButton.addEventListener('click', function() {
    terrianModal.style.display = 'block';
  });

  window.addEventListener('click', function(event) {
    if (event.target == terrianModal) {
      terrianModal.style.display = 'none';
    }
  });

  function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }

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
});
