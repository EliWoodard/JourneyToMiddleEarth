document.addEventListener('DOMContentLoaded', function() {
    const addFearButton = document.querySelector('.addFearButton');
    const fearModal = document.querySelector('.fear');
    const fearSave = document.querySelector('.fearSave');
  
    addFearButton.addEventListener('click', function() {
      fearModal.style.display = 'block';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == fearModal) {
        fearModal.style.display = 'none';
      }
    });
  
    const selectedFear = [];
  
    const fearBoxes = document.querySelectorAll('.fear-box');
  
    fearBoxes.forEach(function(fearBox) {
        fearBox.addEventListener('click', function(event) {
          const image = fearBox.querySelector('.fearImages');
          const imageSrc = image.src;
          const backImageSrc = fearBox.querySelector('.fearImagesBack').src;
    
          if (!selectedFear.includes(imageSrc)) {
            const newFrontImage = document.createElement('img');
            newFrontImage.src = imageSrc;
            newFrontImage.style.width = '20%';
            newFrontImage.style.borderRadius = "5%";
            newFrontImage.classList.add('fearImageDisplay');
            newFrontImage.classList.add('front');
    
            const newBackImage = document.createElement('img');
            newBackImage.src = backImageSrc;
            newBackImage.style.width = '20%';
            newBackImage.style.borderRadius = "5%";
            newBackImage.classList.add('fearImageDisplay');
            newBackImage.classList.add('back');
            newBackImage.style.display = 'none';
    
            const newImageContainer = document.createElement('div');
            newImageContainer.appendChild(newFrontImage);
            newImageContainer.appendChild(newBackImage);
    
            fearSave.appendChild(newImageContainer);
            selectedFear.push(imageSrc);
            fearBox.classList.add('selectedFear');
        } else {
          const imageToRemove = fearSave.querySelector(`img[src="${imageSrc}"]`);
          fearSave.removeChild(imageToRemove);
  
          const index = selectedFear.indexOf(imageSrc);
          selectedFear.splice(index, 1);
          fearBox.classList.remove('selectedFear');
        }
      });
    });
  });
  