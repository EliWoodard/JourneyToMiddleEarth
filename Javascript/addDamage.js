document.addEventListener('DOMContentLoaded', function() {
    const addDamageButton = document.querySelector('.addDamageButton');
    const damageModal = document.querySelector('.damage');
    const damageSave = document.querySelector('.damageSave');
  
    addDamageButton.addEventListener('click', function() {
      damageModal.style.display = 'block';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == damageModal) {
        damageModal.style.display = 'none';
      }
    });
  
    const selectedDamage = [];
  
    const damageBoxes = document.querySelectorAll('.damage-box');
  
    damageBoxes.forEach(function(damageBox) {
      damageBox.addEventListener('click', function(event) {
        const image = damageBox.querySelector('.damageImages');
        const imageSrc = image.src;
        const backImageSrc = damageBox.querySelector('.damageImagesBack').src;
  
        if (!selectedDamage.includes(damageBox)) {
            const newFrontImage = document.createElement('img');
            newFrontImage.src = imageSrc;
            newFrontImage.style.height = '100%';
            newFrontImage.style.borderRadius = "5%";
            newFrontImage.classList.add('damageImageDisplay');
            newFrontImage.classList.add('front');
    
            const newBackImage = document.createElement('img');
            newBackImage.src = backImageSrc;
            newBackImage.style.height = '100%';
            newBackImage.style.borderRadius = "5%";
            newBackImage.classList.add('damageImageDisplay');
            newBackImage.classList.add('back');
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
              newFrontImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
              newFrontImage.style.filter = 'brightness(1)';
              newBackImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
              newBackImage.style.filter = 'brightness(1)';
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

      document.addEventListener('mouseover', function(event) {
        if(event.target.classList.contains('damageImageDisplay')) {
            const parentDiv = event.target.parentElement;
            throttle(() => Card3D(parentDiv, event), 100)();
            event.target.classList.add('damageImageDisplayZoom');
        }
    });
    
    document.addEventListener('mouseout', function(event) {
        if(event.target.classList.contains('damageImageDisplay')) {
            event.target.style.transform = 'rotateX(0deg) rotateY(0deg)';
            event.target.style.filter = 'brightness(1)';
            event.target.classList.remove('damageImageDisplayZoom');
        }
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
        let mouseX = ev.offsetX;
        let mouseY = ev.offsetY;
        let rotateY = map(mouseX, 0, cardRect.width, -25, 25);
        let rotateX = map(mouseY, 0, cardRect.height, 25, -25);
        let brightness = map(mouseY, 0, cardRect.height, 1.5, 0.5);
  
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        img.style.filter = `brightness(${brightness})`;
      }
    }
  });

  function throttle(func, wait) {
    let timeout = null;
    let remaining = 0;
    let previous = 0;

    let later = function() {
        previous = Date.now();
        timeout = null;
        func.apply(null);
    };

    return function() {
        let now = Date.now();
        if (!previous) previous = now;
        let remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(null);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
    };
  }
});