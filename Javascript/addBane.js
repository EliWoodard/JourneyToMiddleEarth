document.addEventListener('DOMContentLoaded', function() {
  var addBaneButton = document.querySelector('.addBaneButton');
  var modal = document.getElementById('bane');
  var baneBoxes = document.querySelectorAll('.bane-box');
  var baneContainer = document.querySelector('.baneSave');

  var selectedBanes = [];

  baneBoxes.forEach(function(baneBox) {
    baneBox.addEventListener('click', function() {
      var imageInBox = baneBox.querySelector('img');
      var imageInContainer;

      if (!selectedBanes.includes(baneBox)) {
        imageInContainer = document.createElement('img');
        imageInContainer.src = imageInBox.src;
        imageInContainer.alt = imageInBox.alt;
        imageInContainer.classList.add('baneImageDisplay');

        var newImageContainer = document.createElement('div');
        newImageContainer.classList.add('baneCardProp');
        newImageContainer.appendChild(imageInContainer);

        baneContainer.appendChild(newImageContainer);
        selectedBanes.push(baneBox);
        baneBox.classList.add('selectedBane');

        newImageContainer.addEventListener('mousemove', (ev) => {
          Card3D(newImageContainer, ev);
        });

        newImageContainer.addEventListener('mouseleave', function(ev) {
          imageInContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
          imageInContainer.style.filter = 'brightness(1)';
        });
      } else if (selectedBanes.includes(baneBox)) {
        const imageToRemove = baneContainer.querySelector(`div > img[src="${imageInBox.src}"]`);
        const containerToRemove = imageToRemove.parentNode;
        baneContainer.removeChild(containerToRemove);

        const index = selectedBanes.indexOf(baneBox);
        selectedBanes.splice(index, 1);
        baneBox.classList.remove('selectedBane');
      }
    });
  });

  addBaneButton.addEventListener('click', function() {
    modal.style.display = 'flex';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
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
