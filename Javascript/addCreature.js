document.addEventListener('DOMContentLoaded', function() {
    const addCreatureButton = document.querySelector('.addCreatureButton');
    const creatureModal = document.querySelector('.creatureModal');
    const creatureSave = document.querySelector('.creatureSave');
  
    addCreatureButton.addEventListener('click', function() {
      creatureModal.style.display = 'block';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == creatureModal) {
        creatureModal.style.display = 'none';
      }
    });
  
    const selectedCreatures = [];
  
    const creatureBoxes = document.querySelectorAll('.creatureModal-box');
  
    creatureBoxes.forEach(function(creatureBox) {
        creatureBox.addEventListener('click', function(event) {
          const image = creatureBox.querySelector('.creatureImages');
          const imageSrc = image.src;
          
          if (selectedCreatures.includes(imageSrc)) {
            const imageToRemove = creatureSave.querySelector(`img[src="${imageSrc}"]`);
            creatureSave.removeChild(imageToRemove);
            
            const index = selectedCreatures.indexOf(imageSrc);
            selectedCreatures.splice(index, 1);
      
            creatureBox.classList.remove('selectedCreature'); // Remove class from box, not image
          } else {
            const newImage = document.createElement('img');
            newImage.src = imageSrc;
            newImage.style.width = '19%';
            newImage.style.borderRadius = "5%"; 
      
            creatureSave.appendChild(newImage);
      
            selectedCreatures.push(imageSrc);
      
            creatureBox.classList.add('selectedCreature'); // Add class to box, not image
          }
        });
      });      
  });
  