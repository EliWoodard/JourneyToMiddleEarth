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
            newFrontImage.style.width = '100%';
            newFrontImage.style.borderRadius = "5%";
            newFrontImage.classList.add('damageImageDisplay');
            newFrontImage.classList.add('front');
    
            const newBackImage = document.createElement('img');
            newBackImage.src = backImageSrc;
            newBackImage.style.width = '100%';
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
  });
  