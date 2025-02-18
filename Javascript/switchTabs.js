var innerTextLower = "player";

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const playerColumn = document.querySelector(".playerColumn");
  const deckColumn = document.querySelector(".deckColumn");
  const sidePanel = document.querySelector(".sidePanel");
  const characterColumn = document.querySelector(".characterColumn");
  const mapColumn = document.querySelector(".mapColumn");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      // Handle Ripple
      createRipple.call(this, e);

      // Existing Tab Functionality
      tabs.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      innerTextLower = this.innerText.toLowerCase();

      if (innerTextLower === "player") {
        playerColumn.style.display = "flex";
        deckColumn.style.display = "none";
        sidePanel.style.display = "none";
        characterColumn.style.display = "none";
        mapColumn.style.display = "none";
      } else if (innerTextLower === "deck") {
        playerColumn.style.display = "none";
        deckColumn.style.display = "flex";
        sidePanel.style.display = "none";
        characterColumn.style.display = "none";
        mapColumn.style.display = "none";
      } else if (innerTextLower === "side panel") {
        playerColumn.style.display = "none";
        deckColumn.style.display = "none";
        sidePanel.style.display = "block";
        characterColumn.style.display = "none";
        mapColumn.style.display = "none";
      } else if (innerTextLower === "character") {
        playerColumn.style.display = "none";
        deckColumn.style.display = "none";
        sidePanel.style.display = "none";
        characterColumn.style.display = "flex";
        mapColumn.style.display = "none";
      } else if (innerTextLower === "map") {
        // playerColumn.style.display = "none";
        // deckColumn.style.display = "none";
        // sidePanel.style.display = "none";
        // characterColumn.style.display = "none";
        // mapColumn.style.display = "flex";
        window.open("https://mapsimulator.onrender.com/", "_blank");
      }

    });
  });
});

function createRipple(e) {
  if (this.getElementsByClassName('ripple').length > 0) {
    this.removeChild(this.childNodes[1]);
  }

  var circle = document.createElement('div');
  this.appendChild(circle);

  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';

  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

  circle.classList.add('ripple');
}

function getInnerText() {
  return innerTextLower;
}

export {getInnerText};