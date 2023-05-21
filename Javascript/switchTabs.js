document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const playerColumn = document.querySelector(".playerColumn");
  const deckColumn = document.querySelector(".deckColumn");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      if (this.innerText.toLowerCase() === "player") {
        playerColumn.style.display = "flex";
        deckColumn.style.display = "none";
      } else if (this.innerText.toLowerCase() === "deck") {
        playerColumn.style.display = "none";
        deckColumn.style.display = "block";
      }
    });
  });
});
