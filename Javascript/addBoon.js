document.addEventListener('DOMContentLoaded', function() {
    var addBoonButton = document.querySelector('.addBoon');
    var modal = document.getElementById('modal');
  
    addBoonButton.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  