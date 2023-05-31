document.addEventListener('DOMContentLoaded', function() {
  var addBoonButton = document.querySelector('.addBoon');
  var modal = document.getElementById('modal');
  var boonBoxes = document.querySelectorAll('.box');
  var boonContainer = document.querySelector('.effectCardsContainer');

  var selectedBoons = [];

  boonBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
      var imageInBox = box.querySelector('img');
      var imageInContainer;

      if (!selectedBoons.includes(box)) {
        imageInContainer = document.createElement('img');
        imageInContainer.src = imageInBox.src;
        imageInContainer.alt = imageInBox.alt;
        imageInContainer.classList.add('boonImageDisplay');

        var newImageContainer = document.createElement('div');
        newImageContainer.classList.add('boonCardProp');
        newImageContainer.appendChild(imageInContainer);

        boonContainer.appendChild(newImageContainer);
        selectedBoons.push(box);
        box.classList.add('selectedBoon');

        newImageContainer.addEventListener('mousemove', (ev) => {
          Card3D(newImageContainer, ev);
        });

        newImageContainer.addEventListener('mouseleave', function(ev) {
          imageInContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
          imageInContainer.style.filter = 'brightness(1)';
        });
      } else if (selectedBoons.includes(box)) {
        const imageToRemove = boonContainer.querySelector(`div > img[src="${imageInBox.src}"]`);
        const containerToRemove = imageToRemove.parentNode;
        boonContainer.removeChild(containerToRemove);

        const index = selectedBoons.indexOf(box);
        selectedBoons.splice(index, 1);
        box.classList.remove('selectedBoon');
      }
    });
  });
  
  addBoonButton.addEventListener('click', function() {
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

  function throttle(func, delay) {
    let timeout;
    let previous = 0;
    return function() {
      const context = this;
      const args = arguments;
      const now = Date.now();
      const remaining = delay - (now - previous);
      if (remaining <= 0) {
        clearTimeout(timeout);
        previous = now;
        func.apply(context, args);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          previous = Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }  
});
