document.addEventListener("DOMContentLoaded", function() {
    var shrinkButton = document.getElementById("shrink-button");
    var leftColumn = document.querySelector(".left-column");
    var tabChoices = document.querySelector(".tabChoices");
    var additionsToLeftColumn = document.querySelector(".additionsToLeftColumn");
    var isShrunk = false;
    var originalWidth = "10%";

    shrinkButton.addEventListener("click", function() {
        isShrunk = !isShrunk;

        if (isShrunk) {
            leftColumn.style.width = "1%";
            tabChoices.style.opacity = "1%";
            additionsToLeftColumn.style.opacity = "1%";
            tabChoices.style.pointerEvents = "none"; 
            additionsToLeftColumn.style.pointerEvents = "none"; 
            shrinkButton.classList.add("rotate");
        } else {
            leftColumn.style.width = originalWidth;
            tabChoices.style.opacity = "1";
            additionsToLeftColumn.style.opacity = "1";
            tabChoices.style.pointerEvents = "auto"; 
            additionsToLeftColumn.style.pointerEvents = "auto"; 
            shrinkButton.classList.remove("rotate");
        }
    });
});
