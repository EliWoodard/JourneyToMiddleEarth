document.addEventListener('DOMContentLoaded', function () {
    let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    const itemModal = document.getElementById('itemModal');
    
    Object.values(selectedItems).forEach(item => {
        var newItem = document.createElement('img');
        newItem.src = item.src;
        newItem.alt = item.alt;
        newItem.style.width = '19%';
        newItem.style.borderRadius = "5%"; 
        newItem.classList.add('itemImg');
        document.querySelector('.itemSave').appendChild(newItem);
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
                // Remove selectedItem class when unselected
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

                // Add selectedItem class when selected
                box.classList.add('selectedItem');
            }

            localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        });
    });
});
