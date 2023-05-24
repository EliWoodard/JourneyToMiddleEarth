document.addEventListener('DOMContentLoaded', function() {
    const fearSave = document.querySelector('.fearSave');
  
    fearSave.addEventListener('click', function(event) {
      if (event.target.classList.contains('fearImageDisplay')) {
        const imageContainer = event.target.parentNode;
        const frontImage = imageContainer.querySelector('.front');
        const backImage = imageContainer.querySelector('.back');
  
        if (frontImage.style.display !== 'none') {
          frontImage.style.display = 'none';
          backImage.style.display = 'block';
        } else {
          frontImage.style.display = 'block';
          backImage.style.display = 'none';
        }
      }
    });
  });