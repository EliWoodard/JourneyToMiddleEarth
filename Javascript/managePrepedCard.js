document.addEventListener('DOMContentLoaded', function() {

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
  
  function throttle(func, delay) {
    let timeout;
    let previous = 0;
    return function() {
      const context = this;
      const args = arguments;
      const now = Date.now();
      const remaining = delay - (now - previous);
      if (remaining <= 0) {
        clearTimeout(timeout);
        previous = now;
        func.apply(context, args);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          previous = Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }    

  function initPrepedCardAnimations() {
    console.log("this is a test")
    let prepedCards = document.querySelectorAll('.prepedCardContainer .prepedCard');
    prepedCards.forEach(card => {
      card.addEventListener('mousemove', throttle((e) => Card3D(card, e), 100));
      card.addEventListener('mouseout', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.filter = `brightness(1)`;
      });
    });
  }

  window.map = map;
  window.Card3D = Card3D;
  window.throttle = throttle;
  window.initPrepedCardAnimations = initPrepedCardAnimations;
});


  