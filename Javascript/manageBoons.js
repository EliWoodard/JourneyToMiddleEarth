document.addEventListener('DOMContentLoaded', function() {
    var boonBoxes = document.querySelectorAll('.box');
    var boonContainer = document.querySelector('.effectCardsContainer');
    
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
          boonContainer.appendChild(imageInContainer);
        }
      });
    });
  });
  