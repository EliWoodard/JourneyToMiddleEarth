document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll(".card").forEach((card) => {
    const numberDiv = card.querySelector(".number");
    const cardImage = card.querySelector(".card-image").getAttribute("src");
    const storedValue = localStorage.getItem(cardImage);
    if(storedValue){
      numberDiv.textContent = storedValue;
    }
  });

  document.querySelectorAll(".plus").forEach((plus) => {
    plus.addEventListener("click", function() {
      const numberDiv = this.previousElementSibling;
      let number = parseInt(numberDiv.textContent);
      number++;
      numberDiv.textContent = number.toString();

      const cardImage = this.closest(".card").querySelector(".card-image").getAttribute("src");
      localStorage.setItem(cardImage, number);
    });
  });

  document.querySelectorAll(".minus").forEach((minus) => {
    minus.addEventListener("click", function() {
      const numberDiv = this.nextElementSibling;
      let number = parseInt(numberDiv.textContent);
      if (number > 0) {
        number--;
        numberDiv.textContent = number.toString();

        const cardImage = this.closest(".card").querySelector(".card-image").getAttribute("src");
        localStorage.setItem(cardImage, number);
      }
    });
  });
});
