document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.querySelector('.addItemButton');
    const itemModal = document.getElementById('itemModal');
    const itemSave = document.querySelector('.itemSave');
  
    function Card3D(card, ev) {
        let img = card.querySelector('img');
        if (img) {
            let cardRect = card.getBoundingClientRect();
            let mouseX = ev.clientX - cardRect.left;
            let mouseY = ev.clientY - cardRect.top;
            let rotateY = map(mouseX, 0, cardRect.width, -25, 25);
            let rotateX = map(mouseY, 0, cardRect.height, 25, -25);
            let brightness = map(mouseY, 0, cardRect.height, 1.5, 0.5);
    
            img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            img.style.filter = `brightness(${brightness})`;
        }
    }
  
    addItemButton.addEventListener('click', function () {
        itemModal.style.display = 'block';
    });

    window.addEventListener('click', function (event) {
        if (event.target == itemModal) {
            itemModal.style.display = 'none';
        }
    });

    let selectedItems = {};
    try {
        let storedValue = localStorage.getItem('selectedItems');
        if (storedValue && typeof storedValue === 'string') {
            let parsedValue = JSON.parse(storedValue);
            if (typeof parsedValue === 'object' && parsedValue !== null) {
                selectedItems = parsedValue;
            } else {
                console.error('Error: localStorage.selectedItems should be an object, got:', parsedValue);
            }
        }
    } catch (err) {
        console.error('Error parsing localStorage.selectedItems:', err);
    }

    const itemBoxes = document.querySelectorAll('.itemModal-box');
  
    itemBoxes.forEach(function(itemBox) {
        const image = itemBox.querySelector('.itemImages');
        const itemImgSrc = image.src;
        const itemTitle = itemBox.dataset.itemTitle;
    
        if (Object.values(selectedItems).some(item => item.src === itemImgSrc)) {
            var newImageContainer = document.createElement('div');
            newImageContainer.classList.add('itemCardProp');
    
            var newImage = document.createElement('img');
            newImage.src = itemImgSrc;
            newImage.alt = itemTitle;
            newImage.classList.add('itemImg');
    
            newImageContainer.appendChild(newImage);
            itemSave.appendChild(newImageContainer);
    
            itemBox.id = 'selectedItem'; 
    
            newImageContainer.addEventListener('mousemove', function(event) {
                Card3D(newImageContainer, event);
            });
    
            newImageContainer.addEventListener('mouseleave', function() {
                newImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
                newImage.style.filter = 'brightness(1)';
            });
        }
    });
    

    itemBoxes.forEach(function(itemBox) {
        itemBox.addEventListener('click', function() {
            const image = itemBox.querySelector('.itemImages');
            const itemImgSrc = image.src;
            const itemTitle = itemBox.dataset.itemTitle;
    
            let selectedItem = Object.values(selectedItems).find(item => item.src === itemImgSrc);
    
            if (selectedItem) {
                const containerToRemove = itemSave.querySelector(`.itemCardProp > img[src="${itemImgSrc}"]`).parentNode;
                itemSave.removeChild(containerToRemove);
    
                selectedItems = Object.fromEntries(Object.entries(selectedItems).filter(([key, item]) => item.src !== itemImgSrc));
    
                itemBox.removeAttribute('id'); // remove the id when unselected
            } else {
                var newImageContainer = document.createElement('div');
                newImageContainer.classList.add('itemCardProp');
    
                var newImage = document.createElement('img');
                newImage.src = itemImgSrc;
                newImage.alt = itemTitle;
                newImage.classList.add('itemImg');
    
                newImageContainer.appendChild(newImage);
                itemSave.appendChild(newImageContainer);
    
                selectedItems[itemTitle] = {
                    src: itemImgSrc,
                    title: itemTitle
                };
    
                itemBox.id = 'selectedItem'; // add the id when selected
    
                newImageContainer.addEventListener('mousemove', function(event) {
                    Card3D(newImageContainer, event);
                });
    
                newImageContainer.addEventListener('mouseleave', function() {
                    newImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    newImage.style.filter = 'brightness(1)';
                });
            }
    
            localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        });
    });
});

function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
