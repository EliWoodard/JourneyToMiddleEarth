document.addEventListener('DOMContentLoaded', function() {
    const addEquipmentButton = document.querySelector('.addTerrianButton');
    const equipmentModal = document.querySelector('.terrian');
    const equipmentSave = document.querySelector('.terrianSave');
  
    addEquipmentButton.addEventListener('click', function() {
      equipmentModal.style.display = 'block';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == equipmentModal) {
        equipmentModal.style.display = 'none';
      }
    });
  
    const selectedEquipment = [];
  
    const equipmentBoxes = document.querySelectorAll('.terrian-box');
  
    equipmentBoxes.forEach(function(equipmentBox) {
      equipmentBox.addEventListener('click', function(event) {
        const image = equipmentBox.querySelector('.terrianImages');
        const imageSrc = image.src;
        
        if (selectedEquipment.includes(imageSrc)) {
          const imageToRemove = equipmentSave.querySelector(`img[src="${imageSrc}"]`);
          equipmentSave.removeChild(imageToRemove);
          
          const index = selectedEquipment.indexOf(imageSrc);
          selectedEquipment.splice(index, 1);
  
          // Remove selectedEquipment class when unselected
          image.classList.remove('selectedTerrian');
        } else {
          const newImage = document.createElement('img');
          newImage.src = imageSrc;
          newImage.style.width = '18%';
          newImage.style.borderRadius = "5%"; 
  
          equipmentSave.appendChild(newImage);
  
          selectedEquipment.push(imageSrc);
  
          // Add selectedEquipment class when selected
          image.classList.add('selectedTerrian');
        }
      });
    });
  });
  