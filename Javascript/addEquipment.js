document.addEventListener('DOMContentLoaded', function() {
  const addEquipmentButton = document.querySelector('.addEquipmentButton');
  const equipmentModal = document.querySelector('.equipment');
  const equipmentSave = document.querySelector('.equipmentSave');

  addEquipmentButton.addEventListener('click', function() {
    equipmentModal.style.display = 'block';
  });

  window.addEventListener('click', function(event) {
    if (event.target == equipmentModal) {
      equipmentModal.style.display = 'none';
    }
  });

  let selectedEquipment = localStorage.getItem('selectedEquipment');
  if (selectedEquipment) {
    selectedEquipment = JSON.parse(selectedEquipment);
  } else {
    selectedEquipment = [];
  }

  const equipmentBoxes = document.querySelectorAll('.equipment-box');

  equipmentBoxes.forEach(function(equipmentBox) {
    const imageInBox = equipmentBox.querySelector('.equipmentImages');
    let imageInContainer;
    
    if (selectedEquipment.includes(imageInBox.src)) {
      imageInContainer = document.createElement('img');
      imageInContainer.src = imageInBox.src;
      imageInContainer.classList.add('equipmentImageDisplay');

      let newImageContainer = document.createElement('div');
      newImageContainer.classList.add('equipmentCardProp');
      newImageContainer.appendChild(imageInContainer);

      equipmentSave.appendChild(newImageContainer);

      newImageContainer.addEventListener('mousemove', (ev) => {
        Card3D(newImageContainer, ev);
      });

      newImageContainer.addEventListener('mouseleave', function(ev) {
        imageInContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        imageInContainer.style.filter = 'brightness(1)';
      });
      
      imageInBox.classList.add('selectedEquipment');
    }

    equipmentBox.addEventListener('click', function(event) {
      if (!selectedEquipment.includes(imageInBox.src)) {
        selectedEquipment.push(imageInBox.src);
        imageInBox.classList.add('selectedEquipment');
    
        imageInContainer = document.createElement('img');
        imageInContainer.src = imageInBox.src;
        imageInContainer.classList.add('equipmentImageDisplay');
    
        let newImageContainer = document.createElement('div');
        newImageContainer.classList.add('equipmentCardProp');
        newImageContainer.appendChild(imageInContainer);
    
        equipmentSave.appendChild(newImageContainer);
    
        newImageContainer.addEventListener('mousemove', (ev) => {
          Card3D(newImageContainer, ev);
        });
    
        newImageContainer.addEventListener('mouseleave', function(ev) {
          imageInContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
          imageInContainer.style.filter = 'brightness(1)';
        });
      } else {
        const imageToRemove = equipmentSave.querySelector(`div > img[src="${imageInBox.src}"]`);
        if(imageToRemove) {
            const containerToRemove = imageToRemove.parentNode;
            equipmentSave.removeChild(containerToRemove);
    
            const index = selectedEquipment.indexOf(imageInBox.src);
            selectedEquipment.splice(index, 1);
    
            imageInBox.classList.remove('selectedEquipment');
        }
      }
    
      localStorage.setItem('selectedEquipment', JSON.stringify(selectedEquipment));
    });    
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
