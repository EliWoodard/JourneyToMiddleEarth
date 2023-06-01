document.addEventListener('DOMContentLoaded', function () {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    const itemModal = document.getElementById('itemModal');
    
    Object.values(selectedItems).forEach(item => {
        var newItem = document.createElement('img');
        newItem.src = item.src;
        newItem.alt = item.alt;
        newItem.classList.add('itemImg');

        var newImageContainer = document.createElement('div');
        newImageContainer.classList.add('itemCardProp');
        newImageContainer.appendChild(newItem);
        document.querySelector('.itemSave').appendChild(newImageContainer);

        newImageContainer.addEventListener('mousemove', (ev) => {
            Card3D(newImageContainer, ev);
        });

        newImageContainer.addEventListener('mouseleave', function(ev) {
            newItem.style.transform = 'rotateX(0deg) rotateY(0deg)';
            newItem.style.filter = 'brightness(1)';
        });

        document.querySelector(`.itemModal-box[data-item-title="${item.alt}"]`).classList.add('selectedItem');
    });

    document.querySelector('.addItemButton').addEventListener('click', function () {
        document.getElementById('itemModal').style.display = 'block';
    });

    window.addEventListener('click', function (event) {
        if (event.target == itemModal) {
            itemModal.style.display = 'none';
        }
    });

    Array.from(document.getElementsByClassName('itemModal-box')).forEach(function (box) {
        box.addEventListener('click', function () {
            var itemImgSrc = box.querySelector('img').src;
            var itemTitle = box.dataset.itemTitle;

            if (selectedItems[itemTitle]) {
                let itemToRemove = document.querySelector(`.itemSave .itemImg[alt='${itemTitle}']`);
                if (itemToRemove) {
                    itemToRemove.remove();
                }
                delete selectedItems[itemTitle];
                box.classList.remove('selectedItem');
            } 
            else {
                var newItem = document.createElement('img');
                newItem.src = itemImgSrc;
                newItem.alt = itemTitle;
                newItem.style.width = '19%';
                newItem.style.borderRadius = "5%"; 
                newItem.classList.add('itemImg');

                document.querySelector('.itemSave').appendChild(newItem);
                selectedItems[itemTitle] = {src: itemImgSrc, alt: itemTitle};

                box.classList.add('selectedItem');
            }

            localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        });
    });
});

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

function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}