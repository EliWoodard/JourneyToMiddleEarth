document.addEventListener('DOMContentLoaded', function() {
    var addBaneButton = document.querySelector('.addBaneButton');
    var modal = document.getElementById('bane');
    var boonBoxes = document.querySelectorAll('.bane-box');
    var boonContainer = document.querySelector('.baneSave');
  
    addBaneButton.addEventListener('click', function() {
      modal.style.display = 'flex';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });

    boonBoxes.forEach(function(box) {
        var imageInContainer;
        box.addEventListener('click', function() {
        var imageInBox = box.querySelector('img');
        if (box.classList.contains('selected')) {
            box.classList.remove('selected');
            imageInContainer.remove();
        } else {
            box.classList.add('selected');
            imageInContainer = document.createElement('img');
            imageInContainer.src = imageInBox.src;
            imageInContainer.alt = imageInBox.alt;
            imageInContainer.classList.add('baneImageDisplay');
            boonContainer.appendChild(imageInContainer);
        }
        });
    });
      
  });
  