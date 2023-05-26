document.addEventListener("DOMContentLoaded", () => {
  const counterValue = document.querySelector(".counter-value");
  const incrementBtn = document.querySelector(".increment");
  const decrementBtn = document.querySelector(".decrement");

  let counter = 0;

  const updateCounterValue = () => {
    counterValue.textContent = counter;
  };

  incrementBtn.addEventListener("click", () => {
    if (counter < 9) {
      counter++;
      updateCounterValue();
    }
  });

  decrementBtn.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      updateCounterValue();
    }
  });
});
