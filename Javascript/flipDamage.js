document.addEventListener('DOMContentLoaded', function() {
    const damageSave = document.querySelector('.damageSave');
  
    damageSave.addEventListener('click', function(event) {
      const target = event.target;
      if (target.classList.contains('damageImageDisplay')) {
        const sibling = target.parentNode.querySelector(`img:not([src="${target.src}"])`);
        target.style.display = 'none';
        sibling.style.display = 'block';
      }
    });
  });
  