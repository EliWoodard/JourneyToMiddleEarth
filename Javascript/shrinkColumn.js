document.addEventListener("DOMContentLoaded", function() {
    var shrinkButton = document.getElementById("shrink-button");
    var leftColumn = document.querySelector(".left-column");
    var tabChoices = document.querySelector(".tabChoices");
    var additionsToLeftColumn = document.querySelector(".additionsToLeftColumn");
    var isShrunk = false;

    shrinkButton.addEventListener("click", function() {
        isShrunk = !isShrunk;

        if (isShrunk) {
            leftColumn.classList.add("shrink");
            tabChoices.style.display = "none";
            additionsToLeftColumn.style.display = "none";
            shrinkButton.classList.add("flipped");
            shrinkButton.classList.remove("button-extended");
        } else {
            leftColumn.classList.remove("shrink");
            tabChoices.style.display = "block";
            additionsToLeftColumn.style.display = "flex";
            shrinkButton.classList.remove("flipped");
            shrinkButton.classList.add("button-extended");
        }
    });
});
