document.addEventListener('DOMContentLoaded', function() {
  const addFearButton = document.querySelector('.addFearButton');
  const fearModal = document.querySelector('.fear');
  const fearSave = document.querySelector('.fearSave');
  const fearBoxes = document.querySelectorAll('.fear-box');

  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  addFearButton.addEventListener('click', function() {
    fearModal.style.display = 'block';
  });

  window.addEventListener('click', function(event) {
    if (event.target == fearModal) {
      fearModal.style.display = 'none';
    }
  });

  const selectedFear = [];

  fearBoxes.forEach(function(fearBox) {
    fearBox.addEventListener('click', function(event) {
      const image = fearBox.querySelector('.fearImages');
      const imageSrc = image.src;
      const backImageSrc = fearBox.querySelector('.fearImagesBack').src;

      if (!selectedFear.includes(fearBox)) {
          const newFrontImage = document.createElement('img');
          newFrontImage.src = imageSrc;
          newFrontImage.style.width = '96%';
          newFrontImage.style.borderRadius = "5%";
          newFrontImage.classList.add('fearImageDisplay');
          newFrontImage.classList.add('front');
  
          const newBackImage = document.createElement('img');
          newBackImage.src = backImageSrc;
          newBackImage.style.width = '96%';
          newBackImage.style.borderRadius = "5%";
          newBackImage.classList.add('fearImageDisplay');
          newBackImage.classList.add('back');
          newBackImage.style.display = 'none';
  
          const newImageContainer = document.createElement('div');
          newImageContainer.classList.add('fearCardProp');
          newImageContainer.appendChild(newFrontImage);
          newImageContainer.appendChild(newBackImage);
  
          fearSave.appendChild(newImageContainer);
          selectedFear.push(fearBox);
          fearBox.classList.add('selectedFear');

          newImageContainer.addEventListener('mousemove', (ev) => {
            Card3D(newImageContainer, ev);
          });
          
          newImageContainer.addEventListener('mouseleave', (ev) => {
            newFrontImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
            newFrontImage.style.filter = 'brightness(1)';
            newBackImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
            newBackImage.style.filter = 'brightness(1)';
          });
      } else if (selectedFear.includes(fearBox)) {
          const imageToRemove = fearSave.querySelector(`div > img[src="${imageSrc}"]`);
          const containerToRemove = imageToRemove.parentNode;
          fearSave.removeChild(containerToRemove);
  
          const index = selectedFear.indexOf(fearBox);
          selectedFear.splice(index, 1);
          fearBox.classList.remove('selectedFear');
      }
    });
  });

  function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }
  
  function Card3D(card, ev) {
    let frontImage = card.querySelector('.front');
    let backImage = card.querySelector('.back');
  
    if (!frontImage && !backImage) {
      return;
    }
  
    let img;
    if(frontImage && frontImage.style.display !== 'none') {
      img = frontImage;
    } else if(backImage) {
      img = backImage;
    } else {
      return;
    }
  
    let cardRect = card.getBoundingClientRect();
    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;
    let rotateY = map(mouseX, 0, cardRect.width, -25, 25);
    let rotateX = map(mouseY, 0, cardRect.height, 25, -25);
    let brightness = map(mouseY, 0, cardRect.height, 1.5, 0.5);
  
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  }
  

  document.addEventListener('mouseout', function(event) {
    if(event.target.classList.contains('fearImageDisplay')) {
      event.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
      event.target.style.filter = 'brightness(1)';
    }
  });
});
