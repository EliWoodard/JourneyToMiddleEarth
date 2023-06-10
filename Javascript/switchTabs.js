document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const playerColumn = document.querySelector(".playerColumn");
  const deckColumn = document.querySelector(".deckColumn");
  const sidePanel = document.querySelector(".sidePanel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      const innerTextLower = this.innerText.toLowerCase();
      if (innerTextLower === "player") {
        playerColumn.style.display = "flex";
        deckColumn.style.display = "none";
        sidePanel.style.display = "none";
      } else if (innerTextLower === "deck") {
        playerColumn.style.display = "none";
        deckColumn.style.display = "flex";
        sidePanel.style.display = "none";
      } else if (innerTextLower === "side panel") {
        playerColumn.style.display = "none";
        deckColumn.style.display = "none";
        sidePanel.style.display = "block";
      }
    });
  });
});
