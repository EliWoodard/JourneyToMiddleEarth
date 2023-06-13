document.addEventListener('DOMContentLoaded', function () {
  const addDamageButton = document.querySelector('.addDamageButton');
  const damageModal = document.querySelector('.damage');
  const damageSave = document.querySelector('.damageSave');

  addDamageButton.addEventListener('click', function () {
      damageModal.style.display = 'block';
  });

  window.addEventListener('click', function (event) {
      if (event.target == damageModal) {
          damageModal.style.display = 'none';
      }
  });

  const selectedDamage = [];
  const damageBoxes = document.querySelectorAll('.damage-box');

  damageBoxes.forEach(function (damageBox) {
      damageBox.addEventListener('click', function (event) {
          const image = damageBox.querySelector('.damageImages');
          const imageSrc = image.src;
          const backImageSrc = damageBox.querySelector('.damageImagesBack').src;

          if (!selectedDamage.includes(damageBox)) {
              const newFrontImage = document.createElement('img');
              newFrontImage.src = imageSrc;
              newFrontImage.style.height = '100%';
              newFrontImage.style.borderRadius = "5%";
              newFrontImage.classList.add('damageImageDisplay', 'front');

              const newBackImage = document.createElement('img');
              newBackImage.src = backImageSrc;
              newBackImage.style.height = '100%';
              newBackImage.style.borderRadius = "5%";
              newBackImage.classList.add('damageImageDisplay', 'back');
              newBackImage.style.display = 'none';

              const newImageContainer = document.createElement('div');
              newImageContainer.classList.add('damageCardProp');
              newImageContainer.appendChild(newFrontImage);
              newImageContainer.appendChild(newBackImage);

              damageSave.appendChild(newImageContainer);
              selectedDamage.push(damageBox);
              damageBox.classList.add('selectedDamage');

              newImageContainer.addEventListener('mousemove', (ev) => {
                  Card3D(newImageContainer, ev);
              });

              newImageContainer.addEventListener('mouseleave', (ev) => {
                  resetImageStyle(newImageContainer);
              });

          } else if (selectedDamage.includes(damageBox)) {
              const imageToRemove = damageSave.querySelector(`div > img[src="${imageSrc}"]`);
              const containerToRemove = imageToRemove.parentNode;
              damageSave.removeChild(containerToRemove);

              const index = selectedDamage.indexOf(damageBox);
              selectedDamage.splice(index, 1);
              damageBox.classList.remove('selectedDamage');
          }
      });
  });

  function map(val, minA, maxA, minB, maxB) {
      return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }

  function Card3D(card, ev) {
      let frontImage = card.querySelector('.front');
      let backImage = card.querySelector('.back');
      let img = frontImage.style.display !== 'none' ? frontImage : backImage;

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

  function resetImageStyle(container) {
      let frontImage = container.querySelector('.front');
      let backImage = container.querySelector('.back');

      if (frontImage) {
          frontImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
          frontImage.style.filter = 'brightness(1)';
      }
      if (backImage) {
          backImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
          backImage.style.filter = 'brightness(1)';
      }
  }
});
