document.addEventListener('DOMContentLoaded', function() {
  // Open the equipment modal
  const addEquipmentButton = document.querySelector('.addEquipmentButton');
  const equipmentModal = document.querySelector('.equipment');
  const equipmentSave = document.querySelector('.equipmentSave');

  addEquipmentButton.addEventListener('click', function() {
    equipmentModal.style.display = 'block';
  });

  // Hide the equipment modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target == equipmentModal) {
      equipmentModal.style.display = 'none';
    }
  });

  // Keep track of selected equipment
  const selectedEquipment = [];

  // Add click event listeners to all equipment images
  const equipmentImages = document.querySelectorAll('.equipmentImages');

  equipmentImages.forEach(function(equipmentImage) {
    equipmentImage.addEventListener('click', function(event) {
      const imageSrc = event.target.src;
      
      // If the image is already selected, unselect it
      if (selectedEquipment.includes(imageSrc)) {
        // Remove the image from the equipmentSave section
        const imageToRemove = equipmentSave.querySelector(`img[src="${imageSrc}"]`);
        equipmentSave.removeChild(imageToRemove);
        
        // Remove the image from the list of selected equipment
        const index = selectedEquipment.indexOf(imageSrc);
        selectedEquipment.splice(index, 1);
      } else {
        // If the image is not selected, select it
        // Create a new img element with the clicked image's src
        const newImage = document.createElement('img');
        newImage.src = imageSrc;
        newImage.style.width = '20%';
        newImage.style.borderRadius = "5%"; 

        // Append the new img element to the equipmentSave section
        equipmentSave.appendChild(newImage);

        // Add the image to the list of selected equipment
        selectedEquipment.push(imageSrc);
      }
    });
  });
});
