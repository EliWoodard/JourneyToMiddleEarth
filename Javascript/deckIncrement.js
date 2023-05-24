
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".plus").forEach((plus) => {
        plus.addEventListener("click", function() {
        const numberDiv = this.previousElementSibling;
        let number = parseInt(numberDiv.textContent);
        number++;
        numberDiv.textContent = number.toString();
        });
    });
  
  document.querySelectorAll(".minus").forEach((minus) => {
    minus.addEventListener("click", function() {
      const numberDiv = this.nextElementSibling;
      let number = parseInt(numberDiv.textContent);
      if (number > 0) {
        number--;
        numberDiv.textContent = number.toString();
      }
    });
  });
});