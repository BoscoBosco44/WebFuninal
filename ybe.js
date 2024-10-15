function alertMsg() {
    alert('Your cart is empty');
}


function changeImage(x, image) {
    if(x == 2) {
        image.src = 'images/assets/succulents-1.jpg';
    }
    if(x == 1) {
        image.src = 'images/assets/succulents-2.jpg';
    }
}

function removeBottomBox(element) {
    element.remove();
}