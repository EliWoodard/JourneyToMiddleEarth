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
    const image = equipmentBox.querySelector('.equipmentImages');
    const imageSrc = image.src;
    
    if (selectedEquipment.includes(imageSrc)) {
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.style.width = '19%';
      newImage.style.borderRadius = "5%"; 

      equipmentSave.appendChild(newImage);
      
      image.classList.add('selectedEquipment');
    }
  });

  equipmentBoxes.forEach(function(equipmentBox) {
    equipmentBox.addEventListener('click', function(event) {
      const image = equipmentBox.querySelector('.equipmentImages');
      const imageSrc = image.src;
      
      if (selectedEquipment.includes(imageSrc)) {
        const imageToRemove = equipmentSave.querySelector(`img[src="${imageSrc}"]`);
        equipmentSave.removeChild(imageToRemove);
        
        const index = selectedEquipment.indexOf(imageSrc);
        selectedEquipment.splice(index, 1);

        image.classList.remove('selectedEquipment');
      } else {
        const newImage = document.createElement('img');
        newImage.src = imageSrc;
        newImage.style.width = '19%';
        newImage.style.borderRadius = "5%"; 

        equipmentSave.appendChild(newImage);

        selectedEquipment.push(imageSrc);

        image.classList.add('selectedEquipment');
      }

      localStorage.setItem('selectedEquipment', JSON.stringify(selectedEquipment));
    });
  });
});
